import React from 'react'
import './Todo.css';
import { useDispatch } from 'react-redux';
import { doneTodo, moveDown, moveUp, removeTodo } from './redux/todos';

const Todo = ({ text, done, id }) => {

    const dispatch = useDispatch();
    // console.log(text, done);
    return (
        <div className={`todo${done ? '__done' : ''}`}>
            <section className="todo__left">
                <span className="checkbox">

                    <input id="checkbox" type="checkbox" value={done} onClick={() => dispatch(doneTodo(id))} />
                </span>
                <span className="todo__text" >{text}</span>
            </section>
            <section className="todo__right">
                <div className="todo__sort">
                    <button onClick={() => dispatch(moveUp(id))}>UP</button>
                    <button onClick={() => dispatch(moveDown(id))}>DOWN</button>
                </div>
                <button onClick={() => dispatch(removeTodo(id))}>REMOVE</button>
            </section>
        </div>
    )
};

export default Todo;


