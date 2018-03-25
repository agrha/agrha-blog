<template>
  <div class = 'container'>
    <form >
      <input v-model = 'username' v-focus>
      <br>
      <input v-model = 'password'>
    </form>
    <button @click = 'login'>Login</button>
    <button @click = 'register'>Register</button>
  </div>
</template>

<script>
import axios from 'axios'
let url = `http://localhost:3000`
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      let obj = {
        username: this.username,
        password: this.password
      }
      axios.post(`${url}/users/signin`, obj)
        .then(response => {
          console.log('masuk', response.data.token)
          console.log('masuk', response.data)
          let token = response.data.token
          let role = response.data.role
          let username = response.data.username
          let id = response.data.id
          localStorage.setItem('token', token)
          localStorage.setItem('role', role)
          localStorage.setItem('username', username)
          localStorage.setItem('id', id)
          if (response.data.role === 'admin') {
            this.$router.push('Admin')
          } else {
            this.$router.push('BlogList')
          }
        })
        .catch(err => {
          console.log('gagal masuk', err.message)
          alert('login gagal, jika belum punya id silahkan register')
        })
    },
    register () {
      this.$router.push('Register')
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>
