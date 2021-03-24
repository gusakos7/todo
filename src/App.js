import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, getTodos, selectTodos } from './redux/todosSlice';

import { Button, TextField } from '@material-ui/core'

let count = 0;

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const loading = useSelector(state => state.todosList.loading);

  const getInput = (val) => {
    setInput(val.target.value);
  };

  const handleClick = () => {
    dispatch(addTodo(input));
    setInput('');
    count++;
  };

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch]);

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

          {
            todos.length === 0 ? "There are no todos, add some..." :

              (loading ? "Adding new Todo..." :
                todos.map((todo) => (
                  <Todo text={todo.text} done={todo.done} key={todo.id} id={todo.id} priority={count} />
                ))
              )
          }

        </section>
      </main>

      <footer>
        Konstantinos Raftopoulos
      </footer>

    </div >
  );
}





export default App;
