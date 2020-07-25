<template>
  <div>
    <h1>Profile Page</h1>
    <div class="container">
      <h1>Counter : {{ counter }}</h1>
      <button @click="increment">Increment</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {}
  },
  methods: {
    increment () {
      this.$store.commit('INCREMENT_COUNTER')
    }
  },
  computed: {
    counter () {
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>
