<template>
  <div class="container-fluid d-flex justify-content-between">
    <div class="d-flex">
      <router-link :to="{name:'products'}">
        <h3>My Products</h3>
      </router-link>
      <router-link :to="{name:'products-add'}">
        <a href="">
          <i class="fas fa-cart-plus fa-2x"></i>
        </a>
      </router-link>
    </div>
    <div class="nav-right">
      <router-link :to="{name:'login'}">
        <h3 @click.prevent="signOut">Sign out</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    signOut () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.container-fluid {
  padding-top:20px;
  padding-bottom:85px;
  display: flex;
  height: 80px;
  position: fixed;
  top:0;
  background-color:white;
  align-items:baseline;
  z-index: 1;
}
h3 {
  margin:10px 20px;
  color: #e84a5f;
}
.d-flex{
  align-content: baseline;
}
a{
  margin-top: 5px;
  color:#e84a5f;
}
</style>
