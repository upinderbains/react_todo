import React, { useState } from "react";
import './Form.css';

const intialState = {
  todos: []
};

const Form = () => {
  const [input, setInput] = useState(intialState);
  const [value, setValue] = useState('');
 
const handleChange = e => {
    setValue(e.target.value);
}
const addTodo = val => {
    const newTodos = [...input.todos, {id: Date.now(), text: val}]
    console.log(newTodos);
    setInput({
        todos: newTodos});
}

const removeTodo = id => {
   const newTodos = [...input.todos]
   const finalTodos = newTodos.filter(todo => todo.id !== id);
   setInput({
    todos: finalTodos
   })  
}

  const formSubmitted = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }
  return (
    <div className="container">
      <form onSubmit={formSubmitted} className='form'>
        <label htmlFor="newTodo">New Todo</label>
        <input
          id="newTodo"
          name="newTodo"
          className="input"
          placeholder="add task"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
        <ul className="todoList">
        {input.todos.map(todo => {
                return <li className="todo" key={todo.id} onClick={() => removeTodo(todo.id)}>{todo.text}</li>;
              })
            }
        </ul>
      </form>
    </div>
  );
};

export default Form;
