import React from 'react';

const AddTodo = (props) => {
    return (
        <div className="container">
        <form onSubmit={props.submit} className='form'>
          <label htmlFor="newTodo">New Todo</label>
          <input
            id="newTodo"
            name="newTodo"
            className="input"
            placeholder="add task"
            value={props.valueHandler}
            onChange={props.changeHandler}
          />
          <button type="submit">Add Todo</button>
          <button onClick={props.doneHandler}>All Done</button>
        </form>
      </div>
    );
};

export default AddTodo;