<template>
  <div class="bg">
    <Navbar />
    <HeaderGuest />
    <ErrorAlert v-if="isErrorStatus == true"/>
    <LoginForm/>
    <Footer />
  </div>
</template>

<script>
import HeaderGuest from '@/components/HeaderGuest.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import LoginForm from '@/components/LoginForm.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'

export default {
  name: 'Home',
  components: {
    HeaderGuest,
    Footer,
    Navbar,
    LoginForm,
    ErrorAlert
  },
  computed: {
    isErrorStatus () {
      return this.$store.state.wrongInput
    }
  }
}
</script>

<style scoped>
  .bg {
    background-color: #f0ece3;
  }
</style>
