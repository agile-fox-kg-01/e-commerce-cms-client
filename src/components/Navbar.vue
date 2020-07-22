<template>
  <div>
    <div class="container-fluid d-flex justify-content-between">
      <div class="nav-left d-flex">
        <div>
          <router-link :to="{name:'products'}">
            <h4 class="my-3 mx-4">My Products</h4>
          </router-link>
        </div>
        <div>
          <router-link :to="{name:'edit-products'}">
            <h4 class="my-3 mx-4">Edit</h4>
          </router-link>
        </div>
      </div>
      <div class="nav-right">
        <router-link :to="{name:'login'}">
          <h4 class="my-3 mx-4">Sign out</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'

}
</script>
<style scoped>
.container-fluid {
  background-color: #ccf0e1;
  display: flex;
  height: 50px;
}
h4 {
  color: #e84a5f;
}
</style>
