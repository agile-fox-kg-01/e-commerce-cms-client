<template>
  <div class="header">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <div id="navb" class="navbar-collapse">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li>
                  <router-link to="/add" class="nav-link">Add Product</router-link>
              </li>
          </ul>

          <ul class="nav navbar-nav ml-auto">
              <li class="nav-item">
                  <a @click="logout" class="btn nav-link">logout</a>
              </li>
          </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Navigation',
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$gAuth.signOut()
        .then(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'success sign out',
            showConfirmButton: false,
            timer: 1000
          })
          this.$router.push({ path: '/login' })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Oops...${err.response}`
          })
        })
    }
  }
}
</script>

<style>
</style>
