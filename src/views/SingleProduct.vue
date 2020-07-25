<template>
  <div class="dashboard">
    <Navigation></Navigation>
    <div class="container-fluid">
        <div class="row product-area">
            <div class="col-5">
                <div class="card">
                    <div class="img-square-wrapper">
                        <a :href="product.image_url" class="btn"><img class="rounded" :src="product.image_url" alt="Card image cap"></a>
                    </div>
                </div>
            </div>
            <div class="col-7">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <h1>{{ product.name }}</h1>
                            <h1>{{ product.price }}</h1>
                            <h1>{{ product.stock }}</h1>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card action-button">
                          <button @click="edit" class="btn btn-lg btn-primary btn-block">Edit</button>
                          <button @click="deleteProduct" class="btn btn-lg btn-primary btn-block">Delete</button>
                          <router-link to="/" class="btn btn-lg btn-primary btn-block">Back</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'

export default {
  name: 'SingleProduct',
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
    edit () {
      this.$router.push({ path: `/product/edit/${this.product.id}` })
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.product.id)
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
    margin: 50px 100px 50px 100px;
    padding: 16px 50px 16px 50px;
    text-align: center;
}

.img-square-wrapper {
    padding: 20px;
}

.rounded {
    width:350px;
    height:350px;
}

.rounded:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

.col-12 {
    margin-bottom: 30px;
}

.action-button {
    padding: 30px;
}
</style>
