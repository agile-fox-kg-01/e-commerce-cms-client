import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        next({ path: '/products' })
      } else {
        next()
      }
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        next()
      } else {
        next({ path: '/login' })
      }
    }
  },
  {
    path: '/products/add',
    name: 'products-add',
    component: () => import('../components/AddForm.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        next()
      } else {
        next({ path: '/login' })
      }
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
