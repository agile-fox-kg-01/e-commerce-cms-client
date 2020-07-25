<template>
  <div class="home">
    <!-- Navbar -->
    <div class="mynavbar">
      <div class="mylogo">
        <p>MYLOGO</p>
      </div>
      <div class="mynavigasi">
        <a href="" class="btn btn-primary">Created by <img src="../assets/logo.png" alt="" width="30" height="30" ></a>
        <a href="" class="btn btn-danger">Logout</a>
      </div>
    </div>
    <Sidebar />
    <!-- <div class="row">
      <Sidebar />
      <div class="col-sm-9">
        <div class="header">
          <marquee behavior="" direction="" loop="5">WELCOME BACK ADMIN. MARQUEE AKAN BERPUTAR 5 KALI LALU MENGHILANG</marquee>
        </div>
        <router-view></router-view>
      </div>
    </div> -->
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');
.mynavbar {
  /* border: 1px solid blue; */
  background-color: #bc986a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}
.mylogo {
  /* border: 1px solid blue; */
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
.mysidebar {
  background-color: #8d8741;
  display: flex;
  flex-direction: column;
}
.mysidebar a:hover{
  text-decoration: unset;
  color: #f1df13;
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
</style>
