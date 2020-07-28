<template>
  <div class="home">
    <div class="mynavbar navbar fixed-top">
      <div class="mylogo">
        <p>E-COMMERSE <span style="font-weight:bold;">CMS</span></p>
      </div>
      <div class="mynavigasi">
        <!-- <a href="" class="btn btn-primary">Created by <img src="../assets/logo.png" alt="" width="30" height="30" ></a> -->
        <a href="" class="btn btn-" @click.prevent="logout">Logout</a>
      </div>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  name: 'Home',
  components: {
    Sidebar
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}
.mynavbar {
  /* border: 1px solid blue; */
  background-color: #5cdb95;
  /* background-color: #f3f5f9; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}
.mylogo {
  /* border: 1px solid blue; */
  color: #05386b;
  font-family: 'Rowdies', cursive;
  display: flex;
  align-items: center;
  font-size: 24px;
}
.mylogo p{
  margin: 0;
}
.mynavigasi {
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  padding: 10px;
}
.mynavigasi a {
  color: white;
  margin-left: 10px;
  padding: 5px 20px;
}
.mynavigasi a:hover {
  margin-left: 10px;
  text-decoration: unset;
}
.mybutton {
  color: white;
  padding: 15px 25px;
}
.mybutton:hover {
  border: 1px solid yellow;
}
.mydetailheader {
  background-color: rgb(138, 138, 138);
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
}
.mydetailheader p{
  margin-top:10px;
  color: white;
}
.myinput {
  border: 0 0 2px 0;
}
</style>
