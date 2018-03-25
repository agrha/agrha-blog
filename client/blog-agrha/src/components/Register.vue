<template>
  <div>
    <form>
      <input type="text" placeholder='input your username here' v-model = 'username'>
      <br>
      <input type="text" placeholder='input your password here' v-model = 'password'>
      <br>
      <button @click = 'signUp'>Sign-Up</button>
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
          this.toBlog()
        })
        .catch(err => {
          console.log('errror', err.message)
        })
    },
    toBlog () {
      this.$router.push({name: 'SignIn'})
    }
  }
}
</script>
