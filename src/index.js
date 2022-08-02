import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import observableTodoStore, { TodoListProvider } from './observableTodoStore';

ReactDOM.render(
  <TodoListProvider store={observableTodoStore}>
    <App />
  </TodoListProvider>,
  document.getElementById('root')
);
