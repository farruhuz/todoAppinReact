import React, { useEffect, useReducer, useState } from "react";
import "./AddTodo.module.css";

const initialState = {
  todoInputName: {val:"", isValid:true}
}

const formReducer = (state,action) =>{
  switch(action.type){
    case "TODO_INPUT_NAME" :
      return {...state, todoInputName:{...state.todoInputName, val:action.payload, id: Date.now()}}
    case "DEFAULT":
      return initialState 
  }
}

const AddTodo = ({ onSubmit }) => {

  const [formState, dispatch] = useReducer(formReducer, initialState)

  const onSubmitAddTodoHandler = (e) =>{
    e.preventDefault()
    if(formState.todoInputName.val?.trim()){
      onSubmit(formState.todoInputName)
      dispatch({type:"TODO_INPUT_NAME", payload:""})
    }
  }

  const onChangeHandler = (e)=>{
    dispatch({type:"TODO_INPUT_NAME", payload: e.target.value})
  }

  return (
    <>
      <form onSubmit={onSubmitAddTodoHandler}>
        <input
          type="text"
          value={formState.todoInputName?.val}
          onChange={onChangeHandler}
          placeholder="Add Todo... "
        />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
