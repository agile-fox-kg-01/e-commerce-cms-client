<template>
  <tr>
    <td>{{ product.name }}</td>
    <td><img :src="product.imageURL" alt="" srcset=""></td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td><button type="button" data-toggle="modal" data-target="#updateproduct" @click="findProduct(product.id)">Update</button> | <button @click="deleteProduct(product.id)">Delete</button></td>
    <div class="modal fade" id="updateproduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Update {{ product.name }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container" id="register-modal">
                    <form action="" @submit.prevent="updateProduct(getProduct.id)">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="getProduct.name">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="getProduct.imageURL">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="getProduct.price">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="getProduct.stock">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  </tr>
</template>

<script>
export default {
  name: 'ProductCard',
  methods: {
    findProduct (id) {
      this.$store.dispatch('fetchProduct', { id })
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', { id })
    },
    updateProduct (id) {
      this.$store.dispatch('updateProduct', {
        id,
        name: this.getProduct.name,
        imageURL: this.getProduct.imageURL,
        price: this.getProduct.price,
        stock: this.getProduct.stock
      })
    }
  },
  props: {
    product: Object
  },
  computed: {
    getProduct () {
      return this.$store.state.product
    }
  }
}
</script>
<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
