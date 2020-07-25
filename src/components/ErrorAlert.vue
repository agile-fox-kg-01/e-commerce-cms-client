<template>
  <div class="alert alert-warning alert-danger fade show" role="alert">
  <strong>Invalid email/password !</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</template>

<script>
export default {
  name: 'ErrorAlert'
}
</script>

<style scoped>
h5 {
  padding: 10px 0;
}
.footer {
    background-color: #363636;
    height: 20%;
    color: white;
}
</style>
