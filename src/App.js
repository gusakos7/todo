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

  const handleClick = () => {
    dispatch(Actions.addTodo(input));
    setInput('');
  };



  console.log(todos);

  return (
    <div className="App">
      <Header />
      <section className="input" >
        <div>
          <input className="app__input" placeholder="new Todo.." value={input} onChange={getInput} />
          <button
            className="app__button"
            onClick={handleClick}
          >Add new</button>
        </div>
      </section>

      <div className="app__list">

        {todos.map((todo, index) => (
          <Todo text={todo.text} done={todo.done} key={todo.id} index={index} />
        ))}

      </div>

    </div >
  );
}





export default App;
