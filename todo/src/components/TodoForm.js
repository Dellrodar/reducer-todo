import React from "react";

export const TodoForm = (props) => {

  return (
    <>
       <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          className="TodoForm"
          value={props.value}
          onChange={props.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    </>
  )
};