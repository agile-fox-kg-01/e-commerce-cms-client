import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'
import router from '../router'

Vue.use(Vuex)

function checkLogin () {
  if (localStorage.getItem('access_token')) {
    router.push('/home')
  } else {
    router.push('/')
  }
}

export default new Vuex.Store({
  state: {
    products: [],
    editProductId: 0,
    editProduct: [],
    wrongInput: false
  },
  mutations: {
    EMPTY_PRODUCT (state) {
      state.products = []
    },
    FETCH_PRODUCT (state, payload) {
      payload.productData.forEach(product => {
        state.products.push(product)
      })
    },
    FETCH_EDIT_PRODUCT_ID (state, payload) {
      state.editProductId = payload
    },
    FETCH_EDIT_PRODUCT (state, payload) {
      state.editProduct = []
      state.editProduct.push(payload)
    }
  },
  actions: {
    async submitLogin ({ commit }, user) {
      return axios
        .post('/user/login', {
          email: user.loginEmail,
          password: user.loginPassword
        })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          checkLogin()
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
          this.state.wrongInput = true
        })
    },
    logout () {
      localStorage.removeItem('access_token')
      checkLogin()
    },
    async createProduct ({ commit }, product) {
      return axios
        .post('/product', {
          name: product.name,
          image_url: product.image_url,
          price: product.price,
          stock: product.stock
        },
        {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(response => {
          checkLogin()
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async fetchProduct ({ commit }) {
      return axios
        .get('/product',
          {
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
        .then(response => {
          const productData = response.data
          commit('FETCH_PRODUCT', { productData })
        })
        .catch(error => {
          console.log(error)
        })
    },
    emptyProduct ({ commit }) {
      commit('EMPTY_PRODUCT')
    },
    async fetchEditProduct ({ commit }, id) {
      return axios
        .get(`/product/${id}`,
          {
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
        .then(response => {
          const productData = response.data
          commit('FETCH_EDIT_PRODUCT', productData)
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async updateProduct ({ commit }, payload) {
      return axios
        .put(`/product/${payload.id}`,
          {
            name: payload.name,
            image_url: payload.image_url,
            price: payload.price,
            stock: payload.stock
          },
          {
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async deleteProduct ({ commit }, id) {
      return axios
        .delete(`/product/${id}`,
          {
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
