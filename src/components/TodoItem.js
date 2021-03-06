import React from "react";

const TodoItem = ({
  todo,
  todos,
  setTodos,
  setTodosCompleted,
  todosCompleted,
}) => {
  const checkTodo = ({ target }) => {
    // Selecting All The Elements
    const checkButton = target;
    const deleteButton = target.nextSibling;
    const parentDiv = target.parentElement;
    const todoItem = parentDiv.previousSibling;

    // Check If It Was Clicked
    if (todoItem.classList.contains("line-through")) {
      todoItem.classList.remove("line-through");
      todoItem.classList.remove("opacity-50");
      deleteButton.classList.remove("opacity-50");
      checkButton.classList.remove("opacity-50");

      setTodosCompleted(todosCompleted - 1);
    } else {
      todoItem.classList.add("line-through");
      todoItem.classList.add("opacity-50");
      deleteButton.classList.add("opacity-50");
      checkButton.classList.add("opacity-50");

      setTodosCompleted(todosCompleted + 1);
    }
  };

  const removeTodo = ({ target }) => {
    const parentDiv = target.parentElement;
    const todoItem = parentDiv.previousSibling;
    setTodos(todos.filter((todo) => todo !== todoItem.innerText));
    setTodosCompleted(todosCompleted - 1);
  };

  return (
    <>
      <div className="flex w-80 justify-between items-center font-semibold text-2xl mt-5">
        <h1 className="ml-5 break-all" value={todo}>
          {todo}
        </h1>
        <div>
          <button className="fa fa-check mr-5" onClick={checkTodo}></button>
          <button className="fa fa-trash" onClick={removeTodo}></button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
