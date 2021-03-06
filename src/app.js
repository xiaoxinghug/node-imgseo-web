// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import store from './store/'
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)
// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })


import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
  Vue.use(VueLazyload, {
    preLoad: 1.3
    // error: 'dist/error.png',
    // loading: 'dist/loading.gif',
    // attempt: 1
  })
// import titleMixin from './util/title'
// import * as filters from './util/filters'

// mixin for handling title
// Vue.mixin(titleMixin)

// register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
