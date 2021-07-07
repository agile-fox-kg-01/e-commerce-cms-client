<template>
  <div class="row">
    <div class="col-sm-8">
      <div class="header">
        <h3>Add Product</h3>
      </div>
      <div class="card" style="width: 40rem;">
          <div class="mydetailheader">
            <p>Form Add Product</p>
          </div>
          <form @submit.prevent="addProduct" action="" class="align-center" style="margin:20px;" >
            <div class="form-group">
              <label for="">Name</label>
              <input class="form-control" v-model="name" type="text">
            </div>
            <div class="form-group">
              <label for="">Image Url</label>
              <input class="form-control" v-model="image_url" type="text">
            </div>
            <div class="form-group">
              <label for="">Price</label>
              <input class="form-control" v-model="price" type="text" >
            </div>
            <div class="form-group">
              <label for="">Stock</label>
              <input class="form-control" v-model="stock" type="text" >
            </div>
            <button type="submit" class="btn btn-info">Add Product</button>
          </form>
      </div>
    </div>
    <div class="col-sm-4">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Add Product',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      })
    }
  },
  created () {
    this.name = ''
    this.image_url = ''
    this.price = 0
    this.stock = 0
  }
}
</script>

<style>

</style>
