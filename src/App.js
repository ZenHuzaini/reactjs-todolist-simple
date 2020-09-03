import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //states
  const [dataText, setDataText] = useState("");
  const [todoData, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USeEffect
  //run only onece effect
  useEffect(() => {
    getLocalTodos();
  }, []);

  // to run a function everytime piece of state changes
  useEffect(() => {
    //first argument is a function
    console.log("hey buds");
    filterHandler();
    saveToLocalTodos();
  }, [status, todoData]); // empty array is the second argument. means that it will render the function once
  //we can put multiple state here. use efect will run if that state (status changes)

  //functions, it can be put in useEffect
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todoData.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todoData.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todoData);
    }
  };

  //save to localstorage
  const saveToLocalTodos = () => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todoData") === null) {
      localStorage.setItem("todoData", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todoData"));
      setTodo(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>Bismillahirrahmaanirrahiim.. {dataText}</header>
      <Form
        dataText={dataText}
        setDataText={setDataText}
        todos={todoData}
        setTodos={setTodo}
        status={status}
        setStatus={setStatus}
      ></Form>
      <TodoList
        setTodo={setTodo}
        todos={todoData}
        filteredTodos={filteredTodos}
      ></TodoList>
    </div>
  );
}

export default App;
