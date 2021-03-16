import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTodos } from './redux/todosSlice';

import { Button, TextField } from '@material-ui/core'

// import * as Actions from './actions';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const getInput = (val) => {
    setInput(val.target.value);
  };

  const handleClick = () => {
    dispatch(addTodo(input));
    setInput('');
  };


  return (
    <div className="app">
      <Header />
      <main>

        <section className="input" >
          {/* <input className="app__input" placeholder="new Todo.." value={input} onChange={getInput} /> */}
          <TextField
            id="outline-basic"
            label="new Todo..."
            onChange={getInput}
            value={input}
            variant='outlined'
            className="app__input"
          />
          <Button
            variant='contained'
            className="app__button"
            onClick={handleClick}
          >
            Add new
          </Button>
        </section>

        <section className="app__list">

          {todos.map((todo) => (
            <Todo text={todo.text} done={todo.done} key={todo.id} id={todo.id} />
          ))}

        </section>
      </main>

      <footer>
        Konstantinos Raftopoulos
      </footer>

    </div >
  );
}





export default App;
