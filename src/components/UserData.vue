<template>
  <div class='card'>
    <div class='card-header main-color'>User List</div>
    <div class='card-body'>
      <table class='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Username</th>
            <th scope='col'>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Alpha</td>
            <td>Alpha@mail.com</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Beta</td>
            <td>Beta@mail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserData'
}
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
.card-body {
  display: flex;
  justify-content: center;
}
.main-color {
  background-color: #b6eb7a;
  border: 0;
}
thead {
  background-color: #363636;
  color: white;
}
</style>
