<template>
  <div>
    <Navigation />
    <Products />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Products from '../components/Products'
export default {
  name: 'Dashboard',
  components: {
    Navigation,
    Products
  }

}
</script>

<style>

</style>
