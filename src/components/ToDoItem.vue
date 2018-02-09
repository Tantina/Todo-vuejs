<template>
  <li class="list-group-item">
    <div class="checkbox">
        <input v-if="editMode"
            class="form-control"
            type="text"
            v-model="todo.name"
            @keyup.enter="onSubmitChanges"
        />
        <div v-else>
          <input type="checkbox" v-model="todo.done" @change="editTodo(todo)" />
          <span @dblclick="onChangeMode">
            {{ todo.name }}
          </span>
          <button
               type="button"
               class="btn close"
               @click="removeTodo(todo.id)">
               <span aria-hidden="true">&times;</span>
          </button>
        </div>

    </div>
  </li>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        editMode: false
      }
    },
    props: ['todo'],
    methods: {
      ...mapActions(['removeTodo', 'editTodo']),
      onChangeMode () {
        this.editMode = true
      },
      onSubmitChanges () {
        if (this.todo.name) {
          this.editTodo(this.todo)
          this.editMode = false
        }
      }
    }
  }
</script>
