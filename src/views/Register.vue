<template>
  <div class="register">
    <form class="form-signin" @submit.prevent="register">
      <h1 class="h3 mb-3">Register as Admin</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="data.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="data.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
      <h3>or</h3>
      <router-link to="/login" class="btn btn-lg btn-primary btn-block">Login</router-link>
    </form>
  </div>
</template>

<script>
import axios from '../api/axiosinstance'
import Swal from 'sweetalert2'

export default {
  name: 'Register',
  data () {
    return {
      data: {
        email: '',
        password: '',
        role: 'admin'
      }
    }
  },
  methods: {
    register () {
      axios({
        method: 'post',
        url: '/register',
        data: this.data
      })
        .then(res => {
          this.$router.push({ path: '/login' })
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `sucess register with ${res.data.email}`,
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
.register {
  height:100%;
  text-align: center;
}

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

.form-signin select {
  color: #403866;
  font-size: 18px;
  height: 62px;
  margin-bottom: 20px;
}

.form-signin button {
  background-color: #403866;
}
</style>
