import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import observableTodoStore from './observableTodoStore';

ReactDOM.render(
  <App todoList={observableTodoStore} />,
  document.getElementById('root')
);
