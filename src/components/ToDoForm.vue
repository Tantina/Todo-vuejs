<template>
    <input
      type="text"
      @keyup.enter="onEnterPressHandler"
      class="form-control mb-2"
      v-model="task"
      placeholder="add a new task"
    />
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        task: ''
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      onEnterPressHandler () {
        const name = this.task.trim()

        if (name) {
          this.addTodo(name)
          this.task = ''
        }
      }
    }
  }
</script>
