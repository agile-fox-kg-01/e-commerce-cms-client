<template>
  <div class="col-sm-6">
    <!-- <h3>Icha</h3> -->
    <div class="card">
      <img :src="`${product.image_url}`" alt="product.image_url" class="card-img-top">
      <h5 class="card-title mt-2">{{ product.name }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  }
}
</script>

<style>

</style>
