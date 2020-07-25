<template>
  <div class="card" style="width: 18rem;">
    <div class="mydetailheader">
      <p>Detail</p>
      <p>Close</p>
    </div>
    <img :src="product.image_url" class="card-img-top" alt="...">
    <form @submit.prevent="updateProduct" action="" class="align-center" >
      <div class="form-group">
        <label for="">Name</label>
        <p>{{ product.name }}</p>
        <input v-model="name" type="text">
      </div>
      <div class="form-group">
        <label for="">Image Url</label>
        <p>{{ product.name }}</p>
        <input v-model="image_url" type="text" >
      </div>
      <div class="form-group">
        <label for="">Price</label>
        <p>{{ product.name }}</p>
        <input v-model="price" type="text" >
      </div>
      <div class="form-group">
        <label for="">Stock</label>
        <p>{{ product.name }}</p>
        <input v-model="stock" type="text" >
      </div>
      <button type="submit" class="btn btn-info">Update</button>
      <a @click="deleteProduct" href="" class="btn btn-danger ml-4">Delete</a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    closeDetail () {

    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct', {
        id: this.$route.params.id
      })
    },
    updateProduct () {
      this.$store.dispatch('updateProduct', {
        id: this.$route.params.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      })
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  }
}
</script>

<style>

</style>
