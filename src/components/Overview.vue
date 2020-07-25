<template>
<div class='card'>
    <div class='card-header main-color'>Website Overview</div>
        <div class='card-body'>
            <div class='col-md-3'>
                <div class='card bg-light overview-card'>
                    <h5 class="card-title">Products</h5>
                    <span class='card-text'><i class='fa fa-shopping-bag fa-fw' aria-hidden='true'></i>&nbsp; {{productsAmount}}</span>
                </div>
            </div>
            <div class='col-md-3'>
                <div class='card bg-light overview-card'>
                    <h5 class="card-title">User</h5>
                    <span class='card-text'><i class='fa fa-user fa-fw' aria-hidden='true'></i>&nbsp; 2</span>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: 'Overview',
  computed: {
    productsAmount () {
      return this.$store.state.products.length
    }
  }
}
</script>

<style scoped>
.col-md-3.card {
    padding: 5px;
    margin: 5px;
}
.card {
    margin-bottom: 10px;
    height: 95%;
}
.card-body {
    display: flex;
    justify-content: center;
}
.main-color {
  background-color: #b6eb7a;
  border: 0;
}
</style>
