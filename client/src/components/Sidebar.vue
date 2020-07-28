<template>
  <div class="row" style="padding-top:70px">
    <div class="col-sm-3 mysidebar">
      <h2>Welcome, Admin!</h2>
      <ul>
        <li><router-link :to="{ name: 'Products' }" class="buttonSidebar"><i class="fa fa-github  fa-2x"></i>All Product</router-link></li>
        <li><router-link :to="{ name: 'Add Product' }" class="buttonSidebar"><i class="fa fa-github fa-2x"></i>Add Product</router-link></li>
        <li><a href=""><i class="fa fa-github fa-2x"></i>Category</a></li>
      </ul>
    </div>
    <div class="col-sm-9 offset-sm-3" >
      <router-view style="margin:0;"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>
.mysidebar {
  height: 100%;
  background: #5cdb95;
  padding: 30px 0px;
  position: fixed;
}
.mysidebar h2 {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}
.mysidebar ul li {
  background-color: #05386b;
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
}
.mysidebar ul li a {
  color: #bdb8d7;
  display: block;
  text-decoration: none;
}
.mysidebar ul li a .fa{
  margin-left: 20px;
  width: 45px;
}
.mysidebar ul li:hover{
  background-color: #379683;
}
.mysidebar ul li:hover a{
  color: #fff;
}

</style>
