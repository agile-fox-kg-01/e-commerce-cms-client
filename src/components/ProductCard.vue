<template>
  <tr>
    <th scope="row"><a @click="toProductPage" class="btn nav-link">{{ product.name }}</a></th>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td class="w-25">
      <a @click="toProductPage" class="btn">
        <img :src="product.image_url" class="img-fluid img-thumbnail" alt="Image">
      </a>
    </td>
    <td>
      <button @click="toProductPage" class="btn btn-primary m-1">Detail</button>
      <button @click="edit" class="btn btn-warning m-1">Edit</button>
      <button @click="deleteProduct" class="btn btn-danger m-1">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    toProductPage () {
      this.$router.push({ path: `/product/${this.product.id}` })
    },
    edit () {
      this.$router.push({ path: `/product/edit/${this.product.id}` })
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.product.id)
    }
  }
}
</script>

<style>
.img-thumbnail {
  height: 100px;
  width: 100;
  max-width:100px;
  max-height:100px;
}

.img-thumbnail:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>
