<template>
  <div class="row">
    <div class="col-sm-8">
      <h3>List All Product</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, est. Repellendus nisi voluptatum, placeat commodi laborum vel nesciunt exercitationem nam? </p>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Image</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          />
        </tbody>
      </table>
    </div>
    <div class="col-sm-4" style="text-align:center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'Products',
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
