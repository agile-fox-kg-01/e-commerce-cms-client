import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductData from '../components/ProductData.vue'
import UserData from '../components/UserData.vue'
import HeaderProduct from '../components/HeaderProduct.vue'
import HeaderUser from '../components/HeaderUser.vue'
import HeaderDashboard from '../components/HeaderDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: 'dashboard',
        components: {
          header: HeaderDashboard
        }
      },
      {
        path: 'product',
        components: {
          data: ProductData,
          header: HeaderProduct
        }
      },
      {
        path: 'user',
        components: {
          data: UserData,
          header: HeaderUser
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (localStorage.getItem('access_token')) {
//     next()
//   }
//   else {
//     router.push('/login')
//   }
// })
export default router
