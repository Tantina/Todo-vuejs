import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const TodosResource = Vue.resource('http://localhost:3000/' + 'todos{/id}')

export default {
  fetchTodos: () => {
    return TodosResource.get()
  },
  addTodo: (data) => {
    return TodosResource.save(data)
  },
  editTodo: (data) => {
    return TodosResource.update({ id: data.id }, data)
  },
  deleteTodo: (id) => {
    return TodosResource.remove({ id: id })
  }
}
