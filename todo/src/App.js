import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import { todoReducer, todos } from "./reducers";
import TodoList from "./components/TodoList";
import './components/Todo.css';

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, todos);

  return (
    <div className="App">
      <h1>My Todo List!</h1>
      <TodoList
        todos={todoState}
        dispatch={dispatch}
      />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}


export default App;