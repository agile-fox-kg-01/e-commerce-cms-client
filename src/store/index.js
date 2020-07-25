import Vue from 'vue'
import Vuex from 'vuex'
import product from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    products: [],
    product: {}
  },
  mutations: {
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    LOGGEDIN_STATUS (state, payload) {
      state.isLoggedIn = payload
    },
    FETCH_PRODUCT (state, payload) {
      state.product = payload
    }
  },
  actions: {
    addProduct (context, payload) {
      product.post('/product', payload, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProducts ({ commit }) {
      product.get('/product', {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('FETCH_PRODUCTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProduct (context, payload) {
      product.get(`/product/${payload.id}`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('FETCH_PRODUCT', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      product.put(`/product/${payload.id}`, {
        name: payload.name,
        imageURL: payload.imageURL,
        price: payload.price,
        stock: payload.stock
      }, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      product({
        method: 'delete',
        url: `/product/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
