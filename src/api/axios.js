import axios from 'axios'

const ecommerce = axios.create({
  baseURL: 'https://e-commerce-server-app.herokuapp.com'
})

export default ecommerce
