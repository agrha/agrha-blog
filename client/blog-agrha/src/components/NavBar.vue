<template>
  <nav class="navbar navbar-light navbar-static-top" role="navigation" style="background-color: #9999ff; margin-bottom: 0">
    <ul class="nav navbar-top-links navbar-right" style= "float: right;">
      <div>
        <h3>B L O G</h3>
      </div>
      <div>
        <p class="btn btn-info btn-lg" @click= 'logout' style='margin-left:15px' align='right'>
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </p>
      </div>
    </ul>
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
      localStorage.clear()
      this.$router.push({name: 'SignIn'})
    }
  }
}
