import React, { useState } from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import List from "../components/List/List";
import './Container.css'

const intialState = {
  todos: []
};

const Container = () => {
  const [input, setInput] = useState(intialState);
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };
  const addTodo = val => {
    const newTodos = [
      ...input.todos,
      { id: Date.now(), done: false, text: val }
    ];
    setInput({
      todos: newTodos
    });
  };

  const removeTodo = id => {
    const newTodos = [...input.todos];
    const finalTodos = newTodos.filter(todo => todo.id !== id);
    setInput({
      todos: finalTodos
    });
  };

  const formSubmitted = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const toggleChange = (e, index) => {
    const newTodos = [...input.todos];
    newTodos[index] = { ...newTodos[index] };
    newTodos[index].done = e.target.checked;
    setInput({
      todos: newTodos
    });
    console.log(newTodos);
  };

  const allDone = () => {
    const todos = input.todos.map(todo => {
      return {
        ...todo,
        done: true
      };
    });

    setInput({
      todos
    });
  };
  return (
    <div className="App">
      <List input={input} toggleChangeHandler={toggleChange} removeTodoHandler={removeTodo}/>
      <AddTodo
        submit={formSubmitted}
        changeHandler={handleChange}
        doneHandler={allDone}
        valueHandler={value}
      />
    </div>
  );
};

export default Container;
