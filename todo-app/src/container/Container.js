import React, { useReducer } from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import List from "../components/List/List";
import "./Container.css";

//REDUCER

const todoReducer = (currentTodoList, action) => {
  switch (action.type) {
    case "ADDTODO":
      return [
        ...currentTodoList,
        { id: Date.now(), done: false, text: action.value }
      ];
    case "DELETETODO":
      return [...currentTodoList].filter(
        todo => todo.id !== action.value
      );
    case "TOGGLECHANGE":
      const newTodos = [...currentTodoList];
      newTodos[action.indexTodo] = { ...newTodos[action.indexTodo] };
      newTodos[action.indexTodo].done = action.event.target.checked;
      return newTodos;

    case "ALLDONE":
      return currentTodoList.map(todo => {
        return {
          ...todo,
          done: true
        };
      });
  }
  return currentTodoList;
};

////////////INTIAL STATE


const Container = () => {
  const [input, dispatchTodo] = useReducer(todoReducer, []);

  const addTodo = val => {
    dispatchTodo({ type: "ADDTODO", value: val });
  };

  const removeTodo = id => {
    dispatchTodo({ type: "DELETETODO", value: id });
  };

  const toggleChange = (e, index) => {
    dispatchTodo({ type: "TOGGLECHANGE", indexTodo: index, event: e });
  };

  const allDone = () => {
    dispatchTodo({ type: "ALLDONE" });
  };

  return (
    <div className="App">
      <List
        displayList={input}
        toggleChangeHandler={toggleChange}
        removeTodoHandler={removeTodo}
      />
      <AddTodo addHandler={addTodo} doneHandler={allDone} />
    </div>
  );
};

export default Container;
