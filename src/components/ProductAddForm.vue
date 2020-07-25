<template>
  <div>
    <div
      class='modal fade'
      id='modal-create-product'
      tabindex='-1'
      role='dialog'
      aria-labelledby='myModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h4 class='modal-title font-weight-bold'>Add new product</h4>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body mx-3 text-left font-weight-bold'>
            <form class='border border-light p-5'>
              <label for='create-name'>Name</label>
              <input type='text' id='create-name' class='form-control mb-4' placeholder='Name' v-model="newProduct.name"/>
              <label for='create-imageurl'>Image URL</label>
              <input
                type='url'
                id='create-imageurl'
                class='form-control mb-4'
                placeholder='Add Image URL'
                v-model="newProduct.image_url"
              />
              <label for='create-price'>Price</label>
              <input type='number' id='create-price' class='form-control mb-4' placeholder='Price' v-model="newProduct.price"/>
              <label for='create-stock'>Stock</label>
              <input type='number' id='create-stock' class='form-control mb-4' placeholder='Stock' v-model="newProduct.stock"/>
              <button class='btn btn-info btn-block my-4' type='submit' @click='createProduct'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductAddForm',
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    createProduct () {
      this.$store.dispatch('createProduct', this.newProduct)
        .then(result => this.emptyAddForm())
        .catch(error => console.log(error))
    },
    emptyAddForm () {
      this.newProduct = {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  }
}
</script>

<style scoped>
.main-color {
  background-color: #b6eb7a;
  border: 0;
}
.btn-info {
    background-color: #363636 !important;
    border: 0;
}
</style>
