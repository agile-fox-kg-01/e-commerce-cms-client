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
      // axios
      //   .get('/products')
      //   .then(({ data }) => {
      //     commit('FETCH_PRODUCTS', data)
      //   })
      //   .catch(console.log)
      axios({
        methods: 'GET',
        url: '/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('FETCH_PRODUCTS', data)
        })
        .catch(console.log)
    },
    fetchProduct ({ commit }, payload) {
      // console.log('fetch product' + payload.id)
      // axios
      //   .get('/products/' + payload.id)
      //   .then(({ data }) => {
      //     commit('FETCH_PRODUCT', data)
      //   })
      //   .catch(console.log)
      axios({
        methods: 'GET',
        url: `/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        }

      })
        .then(({ data }) => {
          commit('FETCH_PRODUCTS', data)
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
      axios({
        method: 'PATCH',
        url: `/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          router.push({ path: '/products' })
        })
        .catch(console.log)
    },
    deleteProduct (_, payload) {
      console.log(payload)
      axios({
        method: 'DELETE',
        url: `/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          router.push({ path: '/products' })
        })
        .catch(console.log)
    },
    addProduct (_, payload) {
      // console.log(payload) berhasil
      axios({
        method: 'POST',
        url: '/products/',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          router.push({ path: '/products' })
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
