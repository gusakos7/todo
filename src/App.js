import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Header from './Header';

let count = 0;

function App() {
  const [input, setInput] = useState(null);
  const [todos, setTodos] = useState([]);

  const getInput = (val) => {
    setInput(val.target.value);
  };

  const handleClick = () => {
    const todo = {
      text: input,
      id: count
    };
    count++;
    setTodos([...todos, todo]);
    setInput('');
  };

  const handleRemove = (e) => {
    const temp = todos.filter((t, i) => t.id !== e.id);
    setTodos(temp);
  }

  const handleMoveUp = (e) => {
    const index = todos.indexOf(e);
    if (index > 0) {
      const tempArr = todos.filter((t) => t.id !== e.id);
      tempArr.splice(index - 1, 0, e);
      console.log(index, 'up');

      setTodos(tempArr);
    }
  }

  const handleMoveDown = (e) => {
    const index = todos.indexOf(e);
    if (index < todos.length) {
      const tempArr = todos.filter((t) => t.id !== e.id);
      tempArr.splice(index + 1, 0, e);
      console.log(index, 'down');

      setTodos(tempArr);
    }
  }

  return (


    <div className="App">
      <Header />
      <section className="input" >
        <div>
          <input className="app__input" value={input} placeholder="new Todo.." onChange={getInput} />
          <button
            className="app__button"
            onClick={handleClick}
          >Add new</button>
        </div>
      </section>

      <div className="app__list">
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="app__todo">
              <div className="app__card" >
                <Todo text={todo.text} id={todo.id} />
                <div className="app__card__btns">
                  <button
                    className="up"
                    onClick={() => handleMoveUp(todo)}
                  > UP
                    <i className="arrow__up"></i>
                  </button>
                  <button
                    className="down"
                    onClick={() => handleMoveDown(todo)}
                  >DOWN
                    <i className="arrow__down"></i>
                  </button>
                </div>
              </div>
              <button className="app__todo__button" onClick={() => handleRemove(todo)} >Remove</button>
            </div>
          ))}
        </div>
      </div>

    </div >
  );
}





export default App;
