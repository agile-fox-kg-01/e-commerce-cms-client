<template>
  <div class="bg">
    <Navbar />
    <router-view name='header'></router-view>
    <div class='container'>
      <div class='row'>
          <Sidebar />
          <div class="col-md-9">
          <Overview />
          </div>
        <div class='col-md-12'>
          <router-view name='data'></router-view>
        </div>
      </div>
    </div>
    <Footer />
    <!-- Modal -->
    <ProductAddForm />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Overview from '@/components/Overview.vue'
import ProductAddForm from '@/components/ProductAddForm.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Navbar,
    Sidebar,
    Overview,
    ProductAddForm
  },
  beforeCreate () {
    this.$store.dispatch('emptyProduct')
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style scoped>
.container {
  margin: 10px auto;
}
.bg {
  background-color: #f0ece3;
}
</style>
