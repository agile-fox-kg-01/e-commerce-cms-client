<template>
  <div class="card" style="width: 18rem; padding-bottom:20px;">
    <div class="mydetailheader">
      <p style="font-size:20px; font-weight:bold;">Detail</p>
      <div @click.prevent="deleteProduct" class="deletebutton">
        <i class="fa fa-trash fa-2x"></i>
      </div>
    </div>
    <img :src="product.image_url" class="card-img-top" alt="...">
    <form @submit.prevent="updateProduct" action="" class="align-center" >
      <div class="form-group">
        <input v-model="product.name" type="text" class="myinput">
      </div>
      <div class="form-group">
        <input v-model="product.image_url" type="text" class="myinput">
      </div>
      <div class="form-group">
        <input v-model="product.price" type="text" class="myinput">
      </div>
      <div class="form-group">
        <input v-model="product.stock" type="text" class="myinput">
      </div>
      <button type="submit" class="btn btn-info">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct', {
        id: this.$route.params.id
      })
    },
    updateProduct () {
      this.$store.dispatch('updateProduct', {
        id: this.$route.params.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      })
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', {
        id: this.$route.params.id
      })
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
.myinput {
  border: 0 ;
  /* border-bottom: 2px solid #fff; */
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #333;
  color: aliceblue;
  text-align: center;
}
.deletebutton {
  padding-top:10px;
  padding-left:10px;
  padding-right:10px;
  color:white;
  cursor:pointer;
}
.deletebutton:hover {
  color:red;
}
</style>
