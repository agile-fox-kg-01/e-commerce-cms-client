<template>
  <div class="main-container">
    <div class="edit-form">
      <div class="form-content">
        <div class="form-header">
          <h4 class="form-title">Edit Product</h4>
        </div>
        <div class="form-body">
          <form action="" @submit.prevent="editProduct" id="edit-form">
            <div class="form-group">
              <div class="input-group">
                <input type="name" class="form-control" v-model="name" placeholder="Name">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <input type="name" class="form-control" v-model="imageURL" placeholder="Image URL">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <input type="name" class="form-control" v-model="price" placeholder="Price">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <input type="name" class="form-control" v-model="stock" placeholder="Stock">
              </div>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-block btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProductForm'
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10px - 17px);
}
.edit-form {
  width: 350px;
}
.edit-form .form-content {
  padding: 20px;
  border-radius: 5px;
  border: none;
}
.edit-form .form-header {
  border-bottom: none;
  position: relative;
  justify-content: center;
}
.edit-form h4 {
  color: #636363;
  text-align: center;
  font-size: 26px;
  margin-top: 0;
}
.edit-form .form-content {
  color: #999;
  border-radius: 1px;
  margin-bottom: 15px;
  background: #fff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 25px;
}
.edit-form .form-group {
  margin-bottom: 20px;
}
.edit-form .form-control {
  min-height: 38px;
  padding-left: 5px;
  box-shadow: none !important;
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.edit-form .form-control:focus {
  border-color: #ccc;
}
.edit-form .btn, .edit-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: #19aa8d !important;
  border-radius: 3px;
  border: none;
  min-width: 140px;
}
.edit-form .btn:hover, .edit-form .btn:focus {
  background: #179b81 !important;
}
.edit-form .form-footer {
  color: #999;
  border-color: #dee4e7;
  text-align: center;
  margin: 0 -25px -25px;
  font-size: 13px;
  justify-content: center;
}
.edit-form a {
  color: #fff;
  text-decoration: underline;
}
.edit-form a:hover {
  text-decoration: none;
}
.edit-form a {
  color: #19aa8d;
  text-decoration: none;
}
.edit-form a:hover {
  text-decoration: underline;
}
</style>
