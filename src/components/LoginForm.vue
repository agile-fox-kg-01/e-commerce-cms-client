<template>
    <div class="login-form">
      <div class="icon-login">
        <i class="fas fa-users fa-3x"></i>
      </div>
      <form @submit.prevent="login">
        <div class="col-12">
          <label for="email" />
          <input id="email" type="text" placeholder="email" v-model="email" />
        </div>
        <div class="col-12">
          <label for="password" />
          <input id="password" type="text" placeholder="password" v-model="password" />
        </div>
        <div class="col-12 div-button">
          <button type="submit">login</button>
        </div>
      </form>
      <div class="div-bottom">
        <p>@ 2020-2021</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
    }
  }
}
</script>
<style scoped>
  .login-form {
    background: hsla(0, 100%, 89%, 1);
    background: radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
    background: -moz-radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
    background: -webkit-radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ffc8c8", endColorstr="#ff5858", GradientType=1 );
    margin:150px auto;
    width: 500px;
    height:320px;
    background-color: #FFC0C0;
    opacity:0.8;
    border-radius: 20px;
  }
  form{
    position: relative;
    margin: 30px;
    text-align: center;
  }
  input {
    color:#f45b69;
    outline: none;
    font-size: 17px;
    width: 300px;
    height: 40px;
    padding-left:10px;
  }
  button {
    text-align: center;
    background-color:#f45b69;
    width: 100px;
    font-size: 15px;
    color:white;
  }
  button:hover {
    background-color: #fa9372;
    color:white;
  }
  p{
    width:20%;
    border-radius: 5px;
    font-size: 13px;
    color:#f45b69;
    background-color: white;
    margin: auto;
  }
  .icon-login{
    text-align: center;
    color:#f45b69;
    padding-top:20px;
  }
  .col-12{
    margin:auto;
  }
  .div-button{
    margin-top:20px;
    text-align: center;
  }
</style>
