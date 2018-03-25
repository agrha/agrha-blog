<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class="glyphicon glyphicon-plus"> Create New Blog</i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="blogTitle" type='text'>
          </div>
          <div class='textform'>
            <label>Content</label>
            <input v-model="blogContent" type='text'>
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      blogTitle: '',
      blogContent: '',
      isCreating: false
    }
  },
  methods: {
    ...mapActions([
      'writeBlog'
    ]),
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.blogTitle.length > 0 && this.blogContent.length > 0) {
        let obj = {
          title: this.blogTitle,
          content: this.blogContent
        }
        this.writeBlog(obj)
        this.closeForm()
      }
    }
  }
}
</script>
