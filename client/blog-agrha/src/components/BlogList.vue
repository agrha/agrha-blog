<template>
  <div class="container">
    <NavBar/>
    <div class="row profile">
      <div class="col-md-4 jumbotron">
        <div class="profile-sidebar">
          <div class="profile-usermenu">
            <h4>ARTICLE LIST</h4>
            <ul class="nav">
              <li v-for= '(post,idx) in posts' :key='idx'>
                <a @click = 'changeIndex(idx)'><i class="glyphicon glyphicon-book"></i>{{post.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-8 jumbotron">
        <div class="profile-content">
          <div class = 'jumbotron'>
            <h2>{{posts[this.index].title}}</h2>
          </div>
         {{posts[this.index].content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from '@/components/NavBar'

export default {
  data () {
    return {
      index: 0
    }
  },
  computed: {
    ...mapGetters([
      'username',
      'role',
      'posts',
      'postChildren'
    ])
  },
  components: {
    NavBar
  },
  methods: {
    changeIndex (index) {
      this.index = index
    }
  }
}
</script>

<style scoped>
a:active{
    background-color: yellow;
}
.profile {
  margin: 20px 0;
}

/* Profile sidebar */
.profile-sidebar {
  padding: 20px 0 10px 0;
  background: #fff;
}

.profile-userpic img {
  float: none;
  margin: 0 auto;
  width: 50%;
  height: 50%;
  -webkit-border-radius: 50% !important;
  -moz-border-radius: 50% !important;
  border-radius: 50% !important;
}

.profile-usertitle {
  text-align: center;
  margin-top: 20px;
}

.profile-usertitle-name {
  color: #5a7391;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 7px;
}

.profile-usertitle-job {
  text-transform: uppercase;
  color: #5b9bd1;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}

.profile-userbuttons {
  text-align: center;
  margin-top: 10px;
}

.profile-userbuttons .btn {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  padding: 6px 15px;
  margin-right: 5px;
}

.profile-userbuttons .btn:last-child {
  margin-right: 0px;
}

.profile-usermenu {
  margin-top: 30px;
}

.profile-usermenu ul li {
  border-bottom: 1px solid #f0f4f7;
}

.profile-usermenu ul li:last-child {
  border-bottom: none;
}

.profile-usermenu ul li a {
  color: #93a3b5;
  font-size: 14px;
  font-weight: 400;
}

.profile-usermenu ul li a i {
  margin-right: 8px;
  font-size: 14px;
}

.profile-usermenu ul li a:hover {
  background-color: #fafcfd;
  color: #5b9bd1;
}

.profile-usermenu ul li.active {
  border-bottom: none;
}

.profile-usermenu ul li.active a {
  color: #5b9bd1;
  background-color: #f6f9fb;
  border-left: 2px solid #5b9bd1;
  margin-left: -2px;
}

/* Profile Content */
.profile-content {
  padding: 20px;
  background: #fff;
  min-height: 460px;
}
</style>
