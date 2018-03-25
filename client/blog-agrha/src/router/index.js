import Vue from 'vue'
import Router from 'vue-router'
// import Admin from '@/components/Admin'
import Home from '@/components/Home'
import Register from '@/components/Register'
import SignIn from '@/components/SignIn'
import BlogList from '@/components/BlogList'
import Admin from '@/components/Admin'
// import ArticleSummary from '@/components/ArticleSummary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/BlogList',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
