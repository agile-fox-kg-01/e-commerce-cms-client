<template>
  <div class="dashboard">
    <Navigation></Navigation>
    <h1 class="h3 mb-3 font-weight-normal">Add Products</h1>
    <div class="container-fluid">
        <div class="card product-area">
            <form @submit.prevent="addProduct">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" v-model="data.name">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" class="form-control" v-model="data.price">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="stock">Stock</label>
                            <input type="number" class="form-control" v-model="data.stock">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="text" class="form-control" v-model="data.image_url">
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary float-left mx-2">Add</button>
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
  name: 'Login',
  components: {
    Navigation
  },
  data () {
    return {
      data: {
        name: '',
        price: null,
        stock: null,
        image_url: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.data)
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

.product-area {
    margin: 0px 300px 50px 300px;
    padding: 16px 50px 16px 50px;
    background-color: white;
    text-align: center;
}
</style>
