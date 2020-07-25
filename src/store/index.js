import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosinstance'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    FETCHPRODUCTS (state, payload) {
      state.products = payload
    },
    RESETPRODUCTS (state) {
      state.products = []
    },
    FETCHONEPRODUCT (state, payload) {
      state.product = payload
    },
    ADDPRODUCT (state, payload) {
      state.products.push(payload)
    },
    DELETEPRODUCT (state, payload) {
      state.products = state.products.filter(product => product.id !== payload)
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          commit('FETCHPRODUCTS', res.data)
        })
        .catch(err => {
          commit('RESETPRODUCTS')
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`,
            text: 'please login with admin users'
          })
        })
    },
    fetchOneProduct ({ commit }, payload) {
      axios({
        method: 'get',
        url: `/products/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          commit('FETCHONEPRODUCT', res.data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`
          })
        })
    },
    editProduct ({ commit }, payload) {
      axios({
        method: 'put',
        url: `/products/edit/${payload.id}`,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Product with name ${payload.name} successfully edited`,
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`
          })
        })
    },
    addProduct ({ commit }, payload) {
      axios({
        method: 'post',
        url: '/products/add',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Product with name ${payload.name} successfully add`,
            showConfirmButton: false,
            timer: 1000
          })
          commit('ADDPRODUCT', res.data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`
          })
        })
    },
    deleteProduct ({ commit }, payload) {
      axios({
        method: 'delete',
        url: `/products/delete/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Product with name ${res.data.name} successfully deleted`,
            showConfirmButton: false,
            timer: 1000
          })
          commit('DELETEPRODUCT', payload)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response.data.errors}`
          })
        })
    }
  },
  modules: {
  }
})
