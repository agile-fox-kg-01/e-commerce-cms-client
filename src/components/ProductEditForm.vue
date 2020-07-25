<template>
  <div>
    <div
      class='modal fade'
      id='modal-update-product'
      tabindex='-1'
      role='dialog'
      aria-labelledby='myModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h4 class='modal-title font-weight-bold'>Edit product</h4>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body mx-3 text-left font-weight-bold'>
            <form class='border border-light p-5'>
              <label for='update-name'>Name</label>
              <input type='text' id='update-name' class='form-control mb-4' v-model="editProduct[0].name"/>
              <label for='update-imageurl'>Image URL</label>
              <input
                type='url'
                id='update-imageurl'
                class='form-control mb-4'
                v-model="editProduct[0].image_url"
              />
              <label for='update-price'>Price</label>
              <input type='number' id='update-price' class='form-control mb-4' v-model="editProduct[0].price"/>
              <label for='update-stock'>Stock</label>
              <input type='number' id='update-stock' class='form-control mb-4' v-model="editProduct[0].stock"/>
              <button class='btn btn-info btn-block my-4' type='submit' @click='updateProduct'>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductEditForm',
  data () {
    return {
    }
  },
  methods: {
    updateProduct () {
      this.$store.dispatch('updateProduct', {
        id: this.editProduct[0].id,
        name: this.editProduct[0].name,
        image_url: this.editProduct[0].image_url,
        price: this.editProduct[0].price,
        stock: this.editProduct[0].stock
      })
    }
  },
  computed: {
    editProduct () {
      return this.$store.state.editProduct
    }
  },
  beforeMount () {
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
