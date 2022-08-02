export default class TodoList {
  todos = [];
  lastId = -1;

  constructor(initialTasks = []) {
    initialTasks.forEach((task) => this.add(task));
  }

  add(task) {
    this.todos.push({
      id: ++this.lastId,
      task,
      completed: false,
    });
  }

  delete(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleCompleted(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  get allTodos() {
    return this.todos.slice();
  }

  get pendingTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  get allTodosCount() {
    return this.todos.length;
  }

  get completedTodosCount() {
    return this.completedTodos.length;
  }
}
