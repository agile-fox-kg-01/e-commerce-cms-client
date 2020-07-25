<template>
    <div id="nav" v-if="isLoggedIn">
        <!-- <router-link to="/">Home</router-link> -->
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/product">Product</router-link>
        <router-link to="/add">Add Product</router-link>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    logout () {
      this.$store.commit('LOGGEDIN_STATUS', false)
      localStorage.clear()
      this.$router.push('/')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('LOGGEDIN_STATUS', true)
    }
  }
}
</script>

<style>

</style>
