<template>
  <div class="dashboard">
    <Navigation></Navigation>
    <h1 class="h3 mb-3 font-weight-normal">Edit Products</h1>
    <div class="container-fluid">
        <div class="card product-area">
            <form @submit.prevent="editProduct">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" v-model="product.name">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" class="form-control" v-model="product.price">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="stock">Stock</label>
                            <input type="number" class="form-control" v-model="product.stock">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="text" class="form-control" v-model="product.image_url">
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary float-left mx-2">Save</button>
                        <router-link to="/" class="btn btn-primary float-left">Back</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'

export default {
  name: 'EditProduct',
  components: {
    Navigation
  },
  created () {
    this.$store.dispatch('fetchOneProduct', this.$route.params.id)
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct', this.product)
      this.$router.push({ path: '/' })
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
  .product-area {
    margin: 0px 10px 50px 10px;
    padding: 16px 10px 16px 10px;
    background-color: white;
    text-align: center;
  }
}

@media (min-width: 500px) {
  .product-area {
    margin: 0px 100px 50px 100px;
    padding: 16px 20px 16px 20px;
    background-color: white;
    text-align: center;
  }
}

@media (min-width: 930px) {
  .product-area {
    margin: 0px 250px 50px 250px;
    padding: 16px 50px 16px 50px;
    background-color: white;
    text-align: center;
  }
}
</style>
