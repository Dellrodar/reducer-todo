import React, {useState} from "react";

const TodoForm = (props) => {
  const {
    dispatch
  } = props;

  const defaultTodo = {
    item: '',
    completed: false,
    id: 0,
  };

  const [newTodo, setNewTodo] = useState({
    item: "",
    completed: false,
    id: Date.now(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: {
      ...newTodo,
      id: Date.now()
    }
   });
    setNewTodo(defaultTodo);
  };

  const handleChanges = (e) => {
    setNewTodo({ ...newTodo, item: e.target.value });
  };

  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETE' });

  return (
    <div className='todo-form'>
       <form onSubmit={handleSubmit}>
        <input
          type="text"
          className = "todo-input"
          value={newTodo.item}
          onChange={handleChanges}
        />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </form>
    </div>
  )
};
export default TodoForm;