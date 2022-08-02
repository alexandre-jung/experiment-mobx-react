import {
  autorun,
  makeObservable,
  observable,
  toJS,
  computed,
  action,
} from 'mobx';
import { observer } from 'mobx-react-lite';
import { createContext, useContext } from 'react';
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

const TodoListContext = createContext(observableTodoStore);

export const TodoListProvider = observer(({ store, children }) => {
  console.log(store.allTodos.map((item) => toJS(item)));
  return (
    // Force the render by recreating a new value every time ? NO WAY !
    <TodoListContext.Provider value={{ store }}>
      {children}
    </TodoListContext.Provider>
  );
});

export const useTodoList = () => {
  const { store } = useContext(TodoListContext);
  return store;
};
