import React from "react";

const List = props => {
  return (
    <section>
      <ul>
        {props.displayList.map((todo, index) => (
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
        ))}
      </ul>
    </section>
  );
};

export default List;
