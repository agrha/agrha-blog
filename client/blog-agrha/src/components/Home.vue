<template>
  <div>
    <H1>
      Welcome To My Blog
    </H1>
    <button @click = 'toRegister'>Register</button>
    <button @click = 'toSignIn'>Signin</button>
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
