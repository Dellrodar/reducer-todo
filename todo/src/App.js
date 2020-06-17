import React, {useReducer, useState} from 'react';
import './App.css';
import { todoReducer, todos } from './reducers';
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, todos);

  const [newTodo, setNewTodo] = useState({
    item: "",
    completed: false,
    id: Date.now(),
  });

  const handleChanges = (e) => {
    setNewTodo({ ...newTodo, item: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo({
      item: "",
      completed: false,
      id: Date.now(),
    });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED", payload: todoState.completed})
  }

    return (
      <div className='App'>
        <div className='Header'>
          <h1>Our Todos</h1>
          <TodoForm value={newTodo.item} handleChanges={handleChanges} handleSubmit={handleSubmit}/>
        </div>
        <TodoList
          clearCompleted={clearCompleted}
          todos={todos}
          toggleTodo={dispatch({ type: 'MARK_COMPLETED', payload: todos.id })}
        />
      </div>
    );
  }

export default App;
