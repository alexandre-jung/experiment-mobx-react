import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

const App = observer(({ todoList }) => {
  const [todo, setTodo] = useState('');
  const addTodo = (task) => todoList.add(task);

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={({ target: { value } }) => setTodo(value)}
      />
      <button onClick={() => addTodo(todo)}>Add</button>
      <br />
      <p>
        {todoList.completedTodosCount} / {todoList.allTodosCount} todos
        completed
      </p>
      <ul>
        {todoList.allTodos.map((todo) => (
          <li
            key={todo.id}
            style={{ listStyleType: todo.completed ? 'disc' : 'circle' }}
          >
            {todo.task}{' '}
            <button onClick={() => todoList.toggleCompleted(todo.id)}>
              complete
            </button>
            <button onClick={() => todoList.delete(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default App;
