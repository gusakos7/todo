import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Header from './Header';
import * as Actions from './actions';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const [input, setInput] = useState(null);

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const getInput = (val) => {
    setInput(val.target.value);
  };
  return (
    <div className="App">
      <Header />
      <section className="input" >
        <div>
          <input className="app__input" placeholder="new Todo.." onChange={getInput} />
          <button
            className="app__button"
            onClick={() => dispatch(Actions.addTodo(input))}
          >Add new</button>
        </div>
      </section>

      <div className="app__list">

        {todos.map((todo, index) => (
          <div key={`todo${index}`} className="app__todo">
            <Todo text={todo.text} id={todo.id} />
          </div>
        ))}

      </div>

    </div >
  );
}





export default App;
