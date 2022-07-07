import React, { useState } from "react";
import {PencilSquare, Trash} from 'react-bootstrap-icons';
import EditModal from "../EditModal/EditModal";
import "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, editTodo, togle, cancelBtn, editTodoYes}) => {

  const [editField, setEditField] = useState({});

  const onEdit = (e) =>{
    editTodo(e);
    setEditField(e);
  }

  const onDelete = (e) =>{
    deleteTodo(e)
  }

  return (
    <ul>
     {togle && <EditModal cancelBtn={cancelBtn} editField={editField} editTodoYes={editTodoYes}/>}
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>
            {todo.val}
          </div> 
          <div className="icons">
              <PencilSquare  className="cursor-pointer" onClick={()=>onEdit(todo)} />
              <Trash className="cursor-pointer" onClick={()=>onDelete(todo)}/>            
          </div> 
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
