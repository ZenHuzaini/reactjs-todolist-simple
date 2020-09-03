import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodo, filteredTodos }) => {
  //key is required in the todo, for uniqeness of a child
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodo={setTodo}
            todos={filteredTodos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          ></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
