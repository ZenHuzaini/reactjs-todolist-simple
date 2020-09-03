import React from "react";

const Form = ({ setDataText, dataText, setTodos, todos, setStatus }) => {
  //create function
  const inputTextHandler = (e) => {
    console.log("show yourself", e.target.value);
    setDataText(e.target.value);
  };

  const submitTodohandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: dataText, completed: false, id: Math.random() * 10000 },
    ]);

    //after submit, set the state to ""
    setDataText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={dataText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit" onClick={submitTodohandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
