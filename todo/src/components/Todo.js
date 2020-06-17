import React from 'react';

const Todo = (props) => {

  return (
    <div
      onClick={() => props.toggleTodo(props.todo.id)}
      className={`item${props.todo.completed ? ' complete' : ''}`}>
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;