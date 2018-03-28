<template>
   <div class="container jumbotron">
  <h2>Register</h2>
  <form>
    <div class="form-group">
      <label for="email">Username:</label>
      <input v-model= 'username' type="text" class="form-control"  placeholder="Enter username">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input v-model= 'password' type="password" class="form-control" placeholder="Enter password">
    </div>
    <button @click = 'login()' type="submit" class="btn btn-primary">Login</button>
    <button @click = 'signUp()' type="submit" class="btn btn-primary">Register As User</button>
    <button @click = 'signAdmin()' type="submit" class="btn btn-primary">Register As Admin</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
const url = `http://localhost:3000`
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      let obj = {
        username: this.username,
        password: this.password
      }
      axios.post(`${url}/users/signup`, obj)
        .then(response => {
          console.log('terdaftar', response.data.data)
          this.login()
        })
        .catch(err => {
          console.log('errror', err.message)
        })
    },
    login () {
      this.$router.push({name: 'SignIn'})
    },
    signAdmin () {
      let obj = {
        username: this.username,
        password: this.password
      }
      axios.post(`${url}/users/admin`, obj)
        .then(response => {
          console.log('terdaftar', response.data.data)
          this.toBlog()
        })
        .catch(err => {
          console.log('errror', err.message)
        })
    }
  }
}
</script>
