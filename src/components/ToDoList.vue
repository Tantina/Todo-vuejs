<template>
  <ul class="list-group mb-1">
    <to-do-item v-for="todo in todos" :todo="todo" :key="todo.id"></to-do-item>
  </ul>
</template>

<script>
import ToDoItem from './ToDoItem'

export default {
  components: {
    ToDoItem
  },
  props: ['todos']
}
</script>
