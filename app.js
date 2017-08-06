const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
// const cookieParser = require('cookie-parser');
const isProd = process.env.NODE_ENV === 'production'
const useMicroCache = process.env.MICRO_CACHE !== 'false'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()
// const app = require('@dp/node-server');

const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8')
// global.cookies = "";
// console.log(template);
function createRenderer (bundle, options) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(bundle, Object.assign(options, {
    template,
    // for component caching
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    // this is only needed when vue-server-renderer is npm-linked
    basedir: resolve('./dist'),
    // recommended for performance
    runInNewContext: false
  }))
}

let renderer
let readyPromise
if (isProd) {
  // In production: create server renderer using built server bundle.
  // The server bundle is generated by vue-ssr-webpack-plugin.
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  // The client manifests are optional, but it allows the renderer
  // to automatically infer preload/prefetch links and directly add <script>
  // tags for any async chunks used during render, avoiding waterfall requests.
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    clientManifest
  })
} else {
  // In development: setup the dev server with watch and hot-reload,
  // and create a new renderer on bundle / index template update.
  readyPromise = require('./build/setup-dev-server')(app, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
// app.use(favicon('./public/logo-48.png'))
app.use('/dist', serve('./dist', true));
// app.use('/public', serve('./public', true))
app.use('/manifest.json', serve('./manifest.json', true))
app.use('/service-worker.js', serve('./dist/service-worker.js'))

// 1-second microcache.
// https://www.nginx.com/blog/benefits-of-microcaching-nginx/
const microCache = LRU({
  max: 100,
  maxAge: 1000
})

// since this app has no user-specific content, every page is micro-cacheable.
// if your app involves user-specific content, you need to implement custom
// logic to determine whether a request is cacheable based on its url and
// headers.
const isCacheable = req => useMicroCache
const parseMeta = (head, context) => {
      const title = context.title || 'sb'
      const description = context.description || ''
      const keywords = context.keywords || ''
      head = head.replace(/(<title>)(.*?)(<\/title>)/, `$1${title}$3`)
      head = head.replace(/(<meta name="description" content=")(.*?)(">)/, `$1${description}$3`)
      head = head.replace(/(<meta name="keywords" content=")(.*?)(">)/, `$1${keywords}$3`)
      return head
}
const parseHTML = tmpl => {
  const placeholder = '<body>'
  const i = tmpl.indexOf(placeholder)
  return {
    head: tmpl.slice(0, i),
    tail: tmpl.slice(i + placeholder.length)
  }
}
function render (req, res) {
  const s = Date.now()
  res.setHeader("Content-Type", "text/html")
  res.setHeader("Server", serverInfo)
  // console.log(req.cookies);
  // global.cookies = req.cookies;
    // console.log(global.cookies);
    // console.log(req.url.length);
    if (/wedphotos\/weddingphoto/ig.test(req.url)){
        if (req.url.length > 25){
            let parameter = req.url.split('/');
            let endindex = "";
            let length = req.url.split('/').length;
            let newarry = parameter[length-1].split("");
             for (var i = 0 ; i <newarry.length ; i++){
                  if ( newarry[i]== 'c'){
                        endindex = i;
                  }
             }
             global.styleTagId = parameter[length-1].substring(1,endindex) || "";
             global.sceneTagId = parameter[length-1].substring(endindex+1,parameter[length-1].length) || "";
        }    
    }else if (/wedphotos\/\d/ig.test(req.url)){
        let picArry = req.url.split('/');
        let length = req.url.split('/').length;
            // console.log(picArry[length-1]);
            global.picId = picArry[length-1];
  }else {
            global.styleTagId = "";
            global.sceneTagId = "";
    }
  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      res.status(404).end('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
        // console.log(res);
      res.status(500).end('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const cacheable = isCacheable(req)
  if (cacheable) {
    const hit = microCache.get(req.url)
    if (hit) {
      if (!isProd) {
        console.log(`cache hit!`)
      }
      return res.end(hit)
    }
  } 
  const context = {url: req.url};
  // const renderStream = renderer.renderToStream(context);
  // let indexHTML = parseHTML(template);
  // renderStream.once('data', () => {
  //   res.write(parseMeta(indexHTML.head, context))
  // })
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    // if (context){

    // }
    // console.log(context.state);
    //  console.log(parseHTML(html))
     let indexHTML = parseHTML(html);
     const renderStream = renderer.renderToStream(context)

    // renderStream.once('data', () => {
    //   res.write(parseMeta(indexHTML.head, context))
    // })
    // console.log(indexHTML.head);
    indexHTML.head = parseMeta(indexHTML.head, context.state);
    res.end(indexHTML.head + indexHTML.tail)
    if (cacheable) {
      microCache.set(req.url, html)
    }
    if (!isProd) {
      console.log(`whole request: ${Date.now() - s}ms`)
    }
  })
}
// app.use(cookieParser());
app.get('*', isProd ? render : (req, res) => {
  // console.log(res);
  console.log("--");
  // const context = {url: req.url}
  // const renderStream = renderer.renderToStream(context)
  //   renderStream.once('data', () => {
  //       res = res.write(parseMeta(template.head, context))
  //   })
  // console.log(context);
    readyPromise.then(() => render(req, res))
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})