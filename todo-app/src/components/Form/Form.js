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
    const newTodos = [...input.todos, {id: Date.now(), done: false, text: val}]
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


  const toggleChange = (e, index) => {
    const newTodos = [...input.todos];
    newTodos[index] = {...newTodos[index]};
    newTodos[index].done = e.target.checked;
    setInput({
        todos: newTodos
    })
    console.log(newTodos);
  }

  const allDone = () => {
    const todos = input.todos.map(todo => {
        return {
            ...todo,
            done: true
        }
    })

    setInput({
        todos
    })
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
        <button onClick={allDone}>All Done</button>

        <ul className="todoList">
        {input.todos.map((todo, index) => {
                return <li className="todo" key={todo.id} >
                <input className ="checkbox" type="checkbox" checked={todo.done} onChange={(event) => toggleChange(event, index)}/>
                 <span className={todo.done ? 'done' : ''}>{todo.text}</span>
                 <button className="del-Button" onClick={() => removeTodo(todo.id)}>Delete</button>
                 </li>;
              })
            }
        </ul>
      </form>
    </div>
  );
};

export default Form;
