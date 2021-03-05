import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Header from './Header';


function App() {
  const [input, setInput] = useState(null);
  const [todos, setTodos] = useState([]);

  const getInput = (val) => {
    setInput(val.target.value);
  };

  const handleClick = () => {
    setTodos([...todos, input]);
  };
  const handleRemove = (index) => {
    const temp = todos.filter((t, i) => i !== index);
    setTodos(temp);

  }

  return (


    <div className="App">
      <Header />
      <section className="input" >
        <div>
          <input className="app__input" placeholder="new Todo.." onChange={getInput} />
          <button
            className="app__button"
            onClick={handleClick}
          >Add new</button>
        </div>
      </section>

      <div className="app__list">
        <div>
          {todos.map((todo, index) => (
            <div key={`todo${index}`} className="app__todo">
              <div >
                <Todo text={todo} />
              </div>
              <button className="app__todo__button" onClick={() => handleRemove(index)} >Remove</button>
            </div>
          ))}
        </div>
      </div>

    </div >
  );
}





export default App;
