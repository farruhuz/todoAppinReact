import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {

  const [todos, setTodos] = useState([]);
  const [togle, setTogle] = useState(false);

  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem("myTodos") || "[]");
    setTodos(users);
  },[])
  
  const onSubmitHandler = (e) => {
    const todoSubmit = [...todos,e];
    localStorage.setItem('myTodos', JSON.stringify(todoSubmit));
    const users = JSON.parse(localStorage.getItem("myTodos") || "[]");
    console.log(users);
    setTodos(todoSubmit);
  };

  const deleteTodo = (e) =>{
    const todoDelete = todos.filter((todo) => { return todo.id !== e.id});
    setTodos(todoDelete);
  }

  const editTodo = (e) => {
    setTogle(true);
  } 

  const cancelBtn = (bool)=> {
    setTogle(bool);
  }
  const editTodoYes = (e)=> {
    console.log(e);
    const editTodo = todos.filter((todo)=>{
      if(todo.id === e.id){
        return todo.val = e.val;
      }
      return todo
    })
    setTodos(editTodo)
  }
  return (
    <div className="container">
      <AddTodo onSubmit={onSubmitHandler} />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
        cancelBtn={cancelBtn}
        togle={togle} 
        editTodoYes={editTodoYes}
      />
    </div>
  );
}

export default App;
