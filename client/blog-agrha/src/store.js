import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let username = localStorage.getItem('username')
let role = localStorage.getItem('role')
let id = localStorage.getItem('id')
let url = `http://localhost:3000`
Vue.use(Vuex)

const state = {
  posts: [
    {title: 'makan bareng Agrha', content: 'makan bareng orang paling ganteng sedunia'},
    {title: 'makan bareng Mega', content: 'makan bareng orang paling nyebelin sedunia'},
    {title: 'makan bareng Habibi', content: 'makan bareng orang paling baik sedunia'}
  ],
  username: username,
  role: role,
  id: id
}

const getters = {
  posts: state => {
    return state.posts
  },
  postChildren: (state) => (id) => {
    return state.post.find(post => post.id === id)
  },
  username: state => {
    return state.username
  },
  role: state => {
    return state.role
  },
  id: state => {
    return state.id
  }
}

const mutations = {
}

const actions = {
  fetchData ({commit}) {
    axios.get(`${url}/articles`)
      .then(data => {
        console.log('hasil fetch', data.data)
        commit('setData', data.data)
      })
  }
  // writeBlog ({commit}) {
  //   axios.post(`${url}/articles/create`, obj)
  //     .then(response => {
  //       console.log(response)
  //     })
  // }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
