<template>
  <div class="dashboard">
    <Navigation></Navigation>
    <div class="container-fluid">
        <div class="row product-area">
            <div class="col-lg-5 col-md-12">
                <div class="card">
                    <div class="img-square-wrapper">
                        <a :href="product.image_url" class="btn"><img class="rounded" :src="product.image_url" alt="Card image cap"></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <h1>{{ product.name }}</h1>
                            <h1>{{ product.price }}</h1>
                            <h1>{{ product.stock }}</h1>
                        </div>
                    </div>
                    <div class="col-lg-12">
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

@media (min-width: 100px) {
  .product-area {
    margin: 0px 10px 50px 10px;
    padding: 16px 10px 16px 10px;
    background-color: white;
    text-align: center;
  }

  .rounded {
    max-width:100%;
    max-height:100%;
  }
}

@media (min-width: 500px) {
  .product-area {
    margin: 0px 10px 50px 10px;
    padding: 16px 20px 16px 20px;
    background-color: white;
    text-align: center;
  }

  .rounded {
    max-width:100%;
    max-height:100%;
  }
}

@media (min-width: 930px) {
  .product-area {
    margin: 0px 70px 50px 70px;
    padding: 16px 30px 16px 30px;
    background-color: white;
    text-align: center;
  }

  .rounded {
    max-width:100%;
    max-height:100%;
  }
}

.img-square-wrapper {
    padding: 20px;
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
