import api from '../api'
import * as types from './types'

export default {
  fetchTodos: ({commit}) => {
    api.fetchTodos().then(response => {
      commit(types.GET_TODO, response.data)
    })
  },
  addTodo: (store, name) => {
    const todo = {
      id: new Date().valueOf(),
      name,
      done: false
    }
    api.addTodo(todo).then(() => {
      store.commit(types.ADD_TODO, todo)
    })
  },
  removeTodo: (store, id) => {
    api.deleteTodo(id).then(() => {
      store.commit(types.REMOVE_TODO, id)
    })
  },
  editTodo: (store, data) => {
    api.editTodo(data).then(() => {
      store.commit(types.EDIT_TODO, data)
    })
  }
}
