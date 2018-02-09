import * as types from './types'

export default {
  [types.GET_TODO] (state, todos) {
    state.todos = todos
  },
  [types.ADD_TODO] (state, todo) {
    state.todos.unshift(todo)
  },
  [types.REMOVE_TODO] (state, todo) {
    state.todos = state.todos.filter(item => item.id !== todo)
  },
  [types.EDIT_TODO] (state, todo) {
    state.todos = state.todos.map(item => (item.id === todo.id ? todo : item))
  }
}
