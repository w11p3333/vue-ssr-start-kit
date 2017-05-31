import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const index = _ => import('views/index')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: index }
    ]
  })
}
