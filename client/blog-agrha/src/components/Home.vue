<template>
  <div class='jumbotron'>
    <H1>
      Welcome To My Blog
    </H1>
    <button @click = 'toRegister' class="btn btn-primary">Register</button>
    <button @click = 'toSignIn' class="btn btn-primary">Signin</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toRegister () {
      this.$router.push({name: 'Register'})
    },
    toSignIn () {
      this.$router.push({name: 'SignIn'})
    }
  }
}
</script>

<style>
</style>
