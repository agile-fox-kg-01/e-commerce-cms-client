import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globals: [],
    products: [],
    product: {}
  },
  mutations: {
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    FETCH_PRODUCT (state, payload) {
      state.product = payload
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios
        .get('/products')
        .then(({ data }) => {
          commit('FETCH_PRODUCTS', data)
        })
        .catch(console.log)
    },
    fetchProduct ({ commit }, payload) {
      console.log('fetch product' + payload.id)
      axios
        .get('/products/' + payload.id)
        .then(({ data }) => {
          commit('FETCH_PRODUCT', data)
        })
        .catch(console.log)
    },
    postLogin (_, payload) {
      console.log(payload)
      axios
        .post('/users/login/', {
          email: payload.email,
          password: payload.password
        })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          router.push({ path: '/' })
        })
        .catch(console.log)
    },
    updateProduct (_, payload) {
      console.log(payload)
      // axios
      //   .patch(`/products/:${this.$route.params.id}`, {
      //     name: payload.name,
      //     image_url: payload.image_url,
      //     price: payload.price,
      //     stock: payload.stock
      //   })
      //   .then(({ data }) => {
      //     router.push({ path: '/products' })
      //   })
      //   .catch(console.log)
    },
    deleteProduct () {
      console.log('delete ' + this.$route.params.id)
      // axios
      //   .delete(`/products/${this.$route.params.id}`)
      //   .then(({ data }) => {
      //     router.push({ path: '/products' })
      //   })
      //   .catch(console.log)
    }
  },
  modules: {
  }
})
