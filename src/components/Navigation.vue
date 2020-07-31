<template>
  <div class="header">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <router-link to="/" class="navbar-brand btn dashboard-btn">Dashboard</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navb" class="navbar-collapse collapse hide">
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
.dashboard-btn:focus {
  box-shadow: none;
}
</style>
