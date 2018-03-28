<template>
    <div class='ui centered card'>
      <div class="content" v-show="!isEditing">
        <div class='header'>
            {{ editform.title }}
        </div>
        <div class='extra content'>
          <span class='right floated edit icon' v-on:click="showForm">
              <button>Edit</button>
          </span>
          <span class='right floated trash icon' v-on:click="sendDelete(editform._id)">
              <button>Delete</button>
          </span>
          <span class='right floated trash icon' v-on:click="changeIndex(editform._id)">
              <button>Show Content</button>
          </span>
        </div>
      </div>
      <div class="content" v-show="isEditing">
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input type='text' v-model="editTitle" value='editform.title' >
          </div>
          <div class='field'>
            <label>Content</label>
            <input type='text' v-model="editContent" value='editform.content' >
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' @click ='sendForm(editform._id)'>
              Update
            </button>
            <button class='ui basic blue button' v-on:click="hideForm">
              Close X
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/javascript">
import {mapActions} from 'vuex'
export default {
  props: ['editform'],
  data () {
    return {
      editTitle: '',
      editContent: '',
      isEditing: false
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    sendForm (payload) {
      console.log('payload editform', payload)
      let obj = {
        id: payload,
        title: this.editTitle,
        content: this.editContent
      }
      console.log(obj)
      this.editBlog(obj)
      this.hideForm()
    },
    changeIndex (payload) {
      // console.log(payload)
      this.$emit('change-index', payload)
    },
    sendDelete (payload) {
      console.log(payload)
      let target = {
        id: payload
      }
      this.deleteBlog(target)
    },
    ...mapActions([
      'editBlog',
      'deleteBlog',
      'fetchData'
    ])
  }
}
</script>
