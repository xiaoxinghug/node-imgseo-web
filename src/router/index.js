import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index.vue'
import Detail from '../view/detail.vue'
Vue.use(Router)

export function createRouter (){
    return new Router({
        mode: 'history',
        routes: [
          {
            path: '/wedphotos/weddingphoto/f(\\d+)c(\\d+)',
            name: 'Index',
            component: Index
          },
          {
            path: '/wedphotos/weddingphoto/',
            name: 'Index',
            component: Index
          },
          {
            path: '/wedphotos/:id',
            name: 'Detail',
            component: Detail
          }
        ]
    })
}