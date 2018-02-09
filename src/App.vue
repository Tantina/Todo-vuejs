<template>
  <div id="app" class="container">
    <h1>To do List</h1>
    <to-do-form></to-do-form>
    <to-do-list :todos="todos"></to-do-list>
    <p className="pl-2">{{countActiveTasks}}
      <span v-if="countActiveTasks > 1">tasks</span>
      <span v-else>task</span>
      left</p>
  </div>
</template>

<script>
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ToDoForm,
    ToDoList
  },
  computed: mapGetters({
    todos: 'getTodos',
    countActiveTasks: 'getActiveTodos'
  }),
  methods: {
    ...mapActions(['fetchTodos'])
  },
  mounted () {
    this.fetchTodos()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
