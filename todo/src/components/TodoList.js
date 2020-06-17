import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const {
    todos,
    dispatch
  } = props;

const toggleTodo = (id) => dispatch({ type: 'MARK_COMPLETE', payload: id });

  return (
		<div className='todo-list'>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} toggleTodo={() => toggleTodo(todo.id)} />
			))}
		</div>
	);
};

export default TodoList;