<template>
  <div>
    <div class="container">
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductBoard',
  components: {
    ProductCard
  }
}
</script>

<style scoped>
</style>
