<template>
  <div class="row">
    <div class="col-sm-3 mysidebar">
      <router-link :to="{ name: 'Products' }" class="buttonSidebar">All Product</router-link>
      <router-link :to="{ name: 'Add Product' }" class="buttonSidebar">Add Product</router-link>
    </div>
    <div class="col-sm-9">
      <div class="header">
        <marquee behavior="" direction="" loop="5">WELCOME BACK ADMIN. MARQUEE AKAN BERPUTAR 5 KALI LALU MENGHILANG</marquee>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>

</style>
