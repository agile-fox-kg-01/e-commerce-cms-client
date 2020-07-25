<template>
  <div class="login">
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="data.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="data.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <button class="btn btn-lg btn-primary btn-block" type="login">Login</button>
    </form>
    <h3>or</h3>
    <button @click="googlesignin" class="btn btn-lg btn-primary btn-block btnr" type="googlesignin">Google</button>
    <router-link to="/register" class="btn btn-lg btn-primary btn-block btnr">Register</router-link>
  </div>
</template>

<script>
import axios from '../api/axiosinstance'
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios({
        method: 'post',
        url: '/login',
        data: this.data
      })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          this.$router.push({ path: '/' })
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `sucess login with ${res.data.email}`,
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
    googlesignin () {
      this.$gAuth.signIn().then(token => {
        const googletoken = token.getAuthResponse()
        return axios({
          method: 'post',
          url: '/login/google',
          headers: {
            google_token: googletoken.id_token
          }
        })
      })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          this.$router.push({ path: '/' })
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `sucess login with ${res.data.email}`,
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
    }
  }
}
</script>

<style scoped>
.form-signin {
    width: 100%;
    max-width: 460px;
    padding: 15px;
    padding-top: 50px;
    margin: 0 auto;
}

.form-signin h1 {
  font-size: 30px;
  color: #403866;
  text-transform: uppercase;
  text-align: center;
}

.form-signin input {
  color: #403866;
  font-size: 18px;
  height: 62px;
  margin-bottom: 20px;
}

.form-signin button {
  background-color: #403866;
}

.login .btnr {
  width: 100%;
  max-width: 430px;
  margin: auto;
  margin-top: 10px;
  background-color: #403866;
}
</style>
