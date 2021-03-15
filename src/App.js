import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './redux/todos';

// import * as Actions from './actions';

function App() {
  const [input, setInput] = useState(null);
  const dispatch = useDispatch();

  // const todos = useSelector(state => state.todos);

  const getInput = (val) => {
    setInput(val.target.value);
  };
  const { todos } = useSelector(state => state.todosList);

  const handleClick = () => {
    dispatch(addTodo(input));
    setInput('');
  };


  return (
    <div className="app">
      <Header />
      <main>

        <section className="input" >
          <input className="app__input" placeholder="new Todo.." value={input} onChange={getInput} />
          <button
            className="app__button"
            onClick={handleClick}
          >Add new</button>
        </section>

        <section className="app__list">

          {todos.map((todo, index) => (
            <Todo text={todo.text} done={todo.done} key={todo.id} id={todo.id} index={index} />
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
