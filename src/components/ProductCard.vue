<template>
  <div>
    <div class="col-3">
      <div class="card m-5" style="width: 20rem;">
        <img
          class="card-img-top"
          src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <a href="#" @click="details">Detail</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'ProductCard',
  methods: {
    details () {
      Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image'
      })
    }
  }
}
</script>

<style>
</style>
