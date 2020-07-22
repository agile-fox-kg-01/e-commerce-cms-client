<template>
  <form>
    <div class="form-group">
      <label for="name"></label>
      <input type="text" class="form-control" placeholder="name" />
    </div>
    <div class="form-group">
      <label for="price"></label>
      <input type="number" class="form-control" placeholder="price" />
    </div>
    <div class="form-group">
      <label for="stock"></label>
      <input type="number" class="form-control" placeholder="stock" />
    </div>
    <div class="form-group">
      <label for="image_url"></label>
      <input type="text" class="form-control" placeholder="image_url" />
    </div>
    <div class="d-flex div-btn">
      <button class="btn">Add</button>
      <button @click="pushTo" class="btn">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddProduct',
  methods: {
    pushTo () {
      this.$router.push('/products/edit')
    }
  }

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  background-color: #ff5d6c;
  margin: 100px auto;
}
.col-lg-6 {
  padding: 30px 15px;
}
img {
  margin-top: 20px;
  width: 100%;
  height: auto;
}

button {
  margin-right: 10px;
  margin-top: 10px;
}
</style>
