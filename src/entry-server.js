import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default context => {
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now()
    const { app, router, store } = createApp()
    store.state.cookie = context.cookie;
    const { url } = context
    const fullPath = router.resolve(url).route.fullPath
    if (fullPath !== url) {
      reject({ url: fullPath })
    }

    // set router's location
    router.push(url)

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }
      
      if (/wedphotos\/weddingphoto\/f/ig.test(context.url)){
        if (context.url.length > 25){
            let parameter = context.url.split('/');
            let endindex = "";
            let length = context.url.split('/').length;
            let newarry = parameter[length-1].split("");
             for (var i = 0 ; i <newarry.length ; i++){
                  if ( newarry[i]== 'c'){
                        endindex = i;
                  }
             }
             store.state.styleTagId = parseInt(parameter[length-1].substring(1,endindex)) || "";
             store.state.sceneTagId = parseInt(parameter[length-1].substring(endindex+1,parameter[length-1].length)) || "";
           }    
          }else if (/wedphotos\/\d/ig.test(context.url)){
              let picArry = context.url.split('/');
              let length = context.url.split('/').length;
                  // console.log(picArry[length-1]);
                  store.state.picId = picArry[length-1];
        }else {
                  store.state.styleTagId = 0;
                  store.state.sceneTagId = 0;
        }
      // Call fetchData hooks on components matched by the route.
      // A preFetch hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))).then(() => {
        // isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // Expose the state on the render context, and let the request handler
        // inline the state in the HTML response. This allows the client-side
        // store to pick-up the server-side state without having to duplicate
        // the initial data fetching on the client.
        context.state = store.state
        context.title = store.title
        context.keywords = store.keywords
        context.description = store.description
       

        // console.log(context.url);
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
