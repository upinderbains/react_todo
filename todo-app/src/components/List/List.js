import React from "react";

const List = (props) => {
  return (
    <div>
      <ul className="todoList">
        {props.input.todos.map((todo, index) => {
          return (
            <li className="todo" key={todo.id}>
              <input
                className="checkbox"
                type="checkbox"
                checked={todo.done}
                onChange={event => props.toggleChangeHandler(event, index)}
              />
              <span className={todo.done ? "done" : ""}>{todo.text}</span>
              <button
                className="del-Button"
                onClick={() => props.removeTodoHandler(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
