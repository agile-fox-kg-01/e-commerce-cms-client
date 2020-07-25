<template>
  <div class='navigation-bar'>
    <nav class='navbar navbar-expand-lg navbar-light bg-light' v-if="showNavbar == true">
      <router-link to="/home/dashboard"><a class='navbar-brand' href='#'>Admin</a></router-link>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul class='navbar-nav'>
          <li class='nav-item active'>
            <router-link to="/home/dashboard"><a class='nav-link' href='#'>
              Dashboard
              <span class='sr-only'>(current)</span>
            </a></router-link>
          </li>
          <li class='nav-item'>
            <router-link to="/home/product"><a class='nav-link' href='#'>Products</a></router-link>
          </li>
          <li class='nav-item'>
            <router-link to="/home/user"><a class='nav-link' href='#'>Users</a></router-link>
          </li>
          <li class='nav-item dropdown navbar-nav'>
            <a
              class='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >Action</a>
            <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
              <a class='dropdown-item' href='#' data-toggle='modal'
                data-target='#modal-create-product'>Create new product</a>
            </div>
          </li>
        </ul>
      </div>
      <div class='collapse navbar-collapse navbar-right' id='navbarNavDropdown'>
        <ul class='navbar-nav'>
          <li class='nav-item active nav-link'>Welcome, Admin</li>
          <li class='nav-item active'>
            <a class='nav-link' href='#' @click='logout'>
              Logout
              <span class='sr-only'>(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      showNavbar: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    loginNavigation () {
      if (localStorage.getItem('access_token')) {
        this.showNavbar = true
      }
    }
  },
  computed: {
  },
  created () {
    this.loginNavigation()
  }
}
</script>

<style scoped>
h3 {
  padding: 10px 0;
}

.navbar {
  background-color: #b6eb7a !important;
  justify-content: space-between;
}
.navbar-right {
  display: flex;
  flex-direction: row-reverse;
align-items: center;
}
</style>
