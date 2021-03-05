import React, { useState } from 'react'
import './Todo.css'

const Todo = ({ text }) => {
    const [done, setDone] = useState(false);

    return (
        <div className={`todo${done ? '__done' : ''}`}>
            <input id="checkbox" type="checkbox" onClick={(e) => setDone(e.target.checked)} />
            <span className="todo__text" ></span>{text}
        </div>
    )
};

export default Todo;


