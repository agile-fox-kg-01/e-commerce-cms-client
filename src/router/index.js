import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/products/edit',
    name: 'edit-products',
    component: () => import('../views/TableEdit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
