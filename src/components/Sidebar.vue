<template>
      <div class='col-md-3 sidebar'>
        <div class='list-group'>
          <router-link to="/home/dashboard"><a class='list-group-item' href='#'>
            <i class='fa fa-home fa-fw' aria-hidden='true'></i> Dashboard
          </a></router-link>
          <router-link to="/home/product"><a class='list-group-item' href='#'>
            <i class='fa fa-shopping-bag fa-fw' aria-hidden='true'></i>&nbsp; Products
          </a></router-link>
           <router-link to="/home/user"><a class='list-group-item' href='#'>
            <i class='fa fa-user fa-fw' aria-hidden='true'></i>&nbsp; Users
          </a></router-link>
          <a class='list-group-item' href='#'>
            <i class='fa fa-cog fa-fw' aria-hidden='true'></i>&nbsp; Settings
          </a>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
    margin-bottom: 10px;
}
.list-group-item {
  display: flex;
  align-items: center;
  text-align: left;
  color: #363636;
}
.main-color {
    background-color: #b6eb7a;
    border: 0;
}
a :active {
  background-color: #b6eb7a;
    border: 0;
}
</style>
