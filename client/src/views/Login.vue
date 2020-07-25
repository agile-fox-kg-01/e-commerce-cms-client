<template>
  <div class="col-sm-6">
    <form @submit.prevent="login">
      <h3>LOGIN FORM</h3>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const userInput = {
        email: this.email,
        password: this.password
      }
      console.log('Login line 34 :' + userInput)
      this.$store.dispatch('postLogin', userInput)
    }
  },
  computed: {
    getUsername () {
      return this.$store.state.username
    }
  },
  created () {
    this.username = this.getUsername
  }
}
</script>

<style>

</style>
