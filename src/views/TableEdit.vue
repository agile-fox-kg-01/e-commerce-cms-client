<template>
  <div class="container-fluid d-flex">
    <div class="col-lg-3">
      <EditForm />
    </div>
    <div class="col-lg-9">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image-URL</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Iphone-X</td>
            <td>10000</td>
            <td>5</td>
            <td>
              <img
                src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"
              />
            </td>
            <td>
              <a href="#">edit</a>
              <a href="#">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import EditForm from '../components/EditForm'
export default {
  name: 'TableEdit',
  components: {
    EditForm
  }

}
</script>

<style scoped>
.container-fluid {
  margin-top: 100px;
}
/* .table {
  margin: auto;
  width: 800px;
} */
/* thead {
  background-color: #e84a5f;
} */
img {
  width: 200px;
  padding: auto;
}
</style>
