export default {
  getTodos: state => state.todos,
  getActiveTodos: state => state.todos.filter(item => item.done === false).length
}
