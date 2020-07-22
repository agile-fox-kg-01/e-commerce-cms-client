<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
      <h2>Ichlasul Amal</h2>
      <div class="row">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axiosInstance'
import ProductCard from '../components/ProductCard'

export default {
  name: 'About',
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      axios
        .get('/products')
        .then(({ data }) => {
          this.products = data
        })
        .catch(console.log)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
