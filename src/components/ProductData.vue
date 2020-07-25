<template>
  <div class='card'>
    <div class='card-header main-color'>Product List</div>
    <div class='card-body'>
      <table class='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Name</th>
            <th scope='col'>Image</th>
            <th scope='col'>Price</th>
            <th scope='col'>Stock</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in productData" :key="index">
            <th scope='row'>{{index+1}}</th>
            <td>{{product.name}}</td>
            <td>{{product.image_url}}</td>
            <td>{{product.price}}</td>
            <td>{{product.stock}}</td>
            <td>
              <div class='btn-group' role='group' aria-label='Basic example'>
                <button type='button' class='btn btn-secondary' data-toggle='modal'
                data-target='#modal-update-product' @click="fetchEditProduct(product.id)">Edit</button>
                <button type='button' class='btn btn-secondary' @click="deleteProduct(product.id)">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <ProductEditForm v-if="this.$store.state.editProduct"/>
  </div>
</template>

<script>
import ProductEditForm from '@/components/ProductEditForm.vue'

export default {
  name: 'ProductData',
  components: {
    ProductEditForm
  },
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(result => {
          this.$store.dispatch('emptyProduct')
          this.$store.dispatch('fetchProduct')
        })
        .catch(error => console.log(error))
    },
    fetchEditProduct (id) {
      this.$store.dispatch('fetchEditProduct', id)
    }
  },
  computed: {
    productData () {
      return this.$store.state.products
    }
  },
  beforeCreate () {
  },
  updated () {
    // this.$store.dispatch('fetchProduct')
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
.card-body {
  display: flex;
  justify-content: center;
}
.main-color {
  background-color: #b6eb7a;
  border: 0;
}
thead {
  background-color: #363636;
  color: white;
}
</style>
