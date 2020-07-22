<template>
  <div>
    <div class="container-fluid">
      <div class="login-form">
        <form>
          <div class="col-12">
            <label for="email"></label>
            <input
              type="text"
              placeholder="email"
              id="email"
            />
          </div>
          <div class="col-12">
            <label for="password"></label>
            <input
              type="text"
              placeholder="password"
              id="password"
            />
          </div>
          <div class="col-12">
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style>
.container-fluid {
  margin-top: 200px;
}

.login-form {
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: #e8505b;
  margin: auto;
}
input {
  width: 300px;
  height: 30px;
  margin-left: 10px;
  margin-top: 20px;
}
button {
  margin: 20px;
  background-color: #32e0c4;
  width: 100px;
  font-size: 15px;
}
button:hover {
  background-color: #66cccc;
}
</style>
