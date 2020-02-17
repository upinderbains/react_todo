import React, { useState } from 'react';

const AddTodo = (props) => {
    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
      };

    const formSubmitted = event => {
        event.preventDefault();
        if (!value) return;
        props.addHandler(value);
        setValue("");
      };
    
    return (
        <section className="container">
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
          <button onClick={props.doneHandler}>All Done</button>
        </form>
      </section>
    );
};

export default AddTodo;