<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Blog-Agrha</a>
      </div>
      <ul class="nav navbar-nav">
        <button class = 'btn btn-primary' @click='logout'>Log Out</button>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    logout () {
      if (localStorage.getItem('token')) {
        localStorage.clear()
        this.$router.push('Home')
      } else {
        alert('you have to login first')
        this.$router.push('Login')
      }
    }
  }
}
