<template>
  <div>
     <Navbar />
  <div class="container">
    <div class="col-sm-12 col-lg-6">
      <img src="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg" />
    </div>
    <div class="col-sm-12 col-lg-6 form-add">
      <form @submit="newProduct">
        <div class="form-group">
          <label for="name"></label>
          <input type="text" class="form-control" placeholder="name" v-model="name"/>
        </div>
        <div class="form-group">
          <label for="price"></label>
          <input type="number" class="form-control" placeholder="price" v-model="price"/>
        </div>
        <div class="form-group">
          <label for="stock"></label>
          <input type="number" class="form-control" placeholder="stock" v-model="stock"/>
        </div>
        <div class="form-group">
          <label for="image_url"></label>
          <input type="text" class="form-control" placeholder="image_url" v-model="image_url"/>
        </div>
        <div class="d-flex div-btn">
          <button class="btn">Add</button>
          <button @click.prevent="cancel" class="btn">Cancel</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navigation.vue'
export default {
  name: 'AddForm',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      price: 0,
      stock: 0,
      image_url: ''
    }
  },
  methods: {
    cancel () {
      this.$router.push('/products')
    },
    newProduct () {
      const newProduct = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url
      }
      this.$store.dispatch('newProduct', newProduct)
      this.$store.dispatch('fetchData')
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
.container {
  background: hsla(0, 100%, 89%, 1);
  background: radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
  background: -moz-radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
  background: -webkit-radial-gradient(circle, hsla(0, 100%, 89%, 1) 0%, hsla(0, 100%, 67%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ffc8c8", endColorstr="#ff5858", GradientType=1 );
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  margin: 100px auto;
}
.col-lg-6 {
  padding-top:10px;
}
.form-group{
  height:40px;
}
img {
  margin-top: 20px;
  width: 100%;
  height: auto;
}
input{
  height:40px;
  font-size: 15px;
  color: #fa9372;
  font-family: 'Kalam', cursive;
}
button {
  width:70px;
  margin-right: 10px;
  margin-top: 30px;
  background-color: #e84a5f;
  color: white;
}
button:hover{
  color:#e84a5f;
  background-color:#fa9372;
}
.div-btn{
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
