<template>
  <div class="dashboard">
    <Navigation></Navigation>
    <h1 class="h3 mb-3 font-weight-normal">All Products</h1>
    <div class="container-fluid">
        <div class="card product-list">
            <div class="row">
              <div class="col-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Image</th>
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
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Home',
  components: {
    Navigation,
    ProductCard
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>
.dashboard h1 {
    margin-top: 20px;
    font-size: 30px;
    color: #403866;
    text-transform: uppercase;
}

@media (min-width: 100px) {
    .product-list {
        margin: 0px 10px 50px 10px;
        padding: 16px 20px 6px 20px;
        background-color: white;
    }
}

@media (min-width: 668px) {
    .product-list {
        margin: 0px 10px 50px 10px;
        padding: 16px 20px 6px 20px;
        background-color: white;
    }
}

@media (min-width: 992px) {
    .product-list {
        margin: 0px 100px 50px 100px;
        padding: 16px 20px 6px 20px;
        background-color: white;
    }
}
</style>
