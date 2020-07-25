<template>
  <div>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
          <ProductCard v-for="product in getProducts" :key="product.id" :product="product" />
        </tbody>
    </table>
  </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  name: 'ProductTable',
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    getProducts () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
