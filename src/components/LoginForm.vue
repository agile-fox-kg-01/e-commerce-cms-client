<template>
  <div class='login-form card'>
    <form class='text-center border border-light p-5' action='#!'>
      <p class='h4 mb-4'>Sign in</p>
      <label for='login-email'>Email</label>
      <input
        type='text'
        id='login-email'
        class='form-control mb-4'
        placeholder='Email'
        v-model='user.loginEmail'
      />
      <label for='login-password'>Password</label>
      <input
        type='password'
        id='login-password'
        class='form-control mb-4'
        placeholder='Password'
        v-model='user.loginPassword'
      />
      <button class='btn btn-block my-4' type='submit' @click.prevent='submitLogin'>Sign in</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        loginEmail: '',
        loginPassword: ''
      }
    }
  },
  computed: {
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('submitLogin', this.user)
    }
  }
}
</script>

<style scoped>
.login-form {
  width: 30%;
  margin: 10px auto;
}
.login-form label {
  display: flex;
}
.btn {
  background-color: #363636 !important;
  border: 0;
  color: white;
}
</style>
