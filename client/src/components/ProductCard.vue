<template>
  <tr class="baris">
    <th scope="row">{{ product.id }}</th>
    <td><img :src="product.image_url" alt="product.image_url" class="imageku"></td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td><a @click="goToDetail" class="btn btn-primary">Detail</a></td>
    <!-- <td><button @click="goToDetail" class="btn btn-primary">Detail</button></td> -->
  </tr>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    goToDetail () {
      this.$store.dispatch('fetchProduct', {
        id: this.product.id
      })
      this.$router.push({ path: `/products/${this.product.id}` })
    }
  }
}
</script>

<style>
.imageku{
  width: 60px;
  height: 40px;
}
</style>
