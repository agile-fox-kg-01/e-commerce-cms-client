<template>
  <div class="dashboard">
    <Navigation></Navigation>
    <div class="container-fluid">
      <div class="page-title">
        <h1 class="title">All Products</h1>
        <router-link to="/add" class="btn btn-primary m-1">Add Product</router-link>
      </div>
      <div class="card product-list">
        <div class="row">
          <div class="col-12 table-responsive">
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
  text-align: center;
  margin-top: 10px;
  font-size: 30px;
  color: #403866;
  text-transform: uppercase;
}

@media (min-width: 100px) {
  .page-title {
    margin: 0px 10px;
  }
  .product-list {
    margin: 0px 10px 50px 10px;
    padding: 16px 20px 6px 20px;
    background-color: white;
  }
}

@media (min-width: 668px) {
  .page-title {
    margin: 0px 10px;
  }
  .product-list {
    margin: 0px 10px 50px 10px;
    padding: 16px 20px 6px 20px;
    background-color: white;
  }
}

@media (min-width: 992px) {
  .page-title {
    margin: 0px 100px;
  }
  .product-list {
    margin: 0px 100px 50px 100px;
    padding: 16px 20px 6px 20px;
    background-color: white;
  }
}

.table-responsive {
  height:400px;
  overflow:scroll;
}

thead tr:nth-child(1) th {
  background: white; position: sticky;top: 0;z-index: 10;
}
</style>
