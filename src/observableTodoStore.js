import {
  autorun,
  makeObservable,
  observable,
  toJS,
  computed,
  action,
} from 'mobx';
import TodoList from './todo';

class ObservableTodoStore extends TodoList {
  constructor(initialTasks = []) {
    super(initialTasks);
    makeObservable(this, {
      todos: observable,
      add: action,
      delete: action,
      toggleCompleted: action,
      allTodosCount: computed,
      completedTodosCount: computed,
    });
    autorun(() => console.log(toJS(this.allTodos.map((todo) => toJS(todo)))));
  }
}

const observableTodoStore = new ObservableTodoStore([
  'Learn Clean Code',
  'Try MobX',
]);

export default observableTodoStore;
