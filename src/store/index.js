import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'
import router from '../router'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    access_token: null,
    products: []
  },
  mutations: {
    LOGIN (state, payload) {
      state.access_token = payload
    },
    FETCH_DATA (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      axios
        .post('/login',
          {
            email: payload.email,
            password: payload.password
          })
        .then(({ data }) => {
          commit('LOGIN', data.access_token)
          localStorage.setItem('access_token', data.access_token)
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchData ({ commit }) {
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          // console.log(data)
          commit('FETCH_DATA', data.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    newProduct ({ commit }, payload) {
      // console.log(payload)
      axios({
        url: '/products',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          payload
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err.response.data.errors)
        })
    },
    edit ({ commit }, payload) {
      axios({
        url: '/products/' + payload.id,
        method: 'put',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          payload
        }
      })
        .then(data => {
          console.log('success edit on server')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct ({ commit }, id) {
      axios({
        url: '/products/' + id,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log('gak kedelete', err)
        })
    }
  },
  modules: {
  }
})
