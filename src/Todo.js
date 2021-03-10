import React from 'react'
import './Todo.css';
import * as Actions from './actions';
import { useDispatch } from 'react-redux';

const Todo = ({ text, done, index }) => {

    const dispatch = useDispatch();
    console.log(text, done);
    return (
        <div className={`todo${done ? '__done' : ''}`}>
            <section className="todo__left">
                <span className="checkbox">

                    <input id="checkbox" type="checkbox" value={done} onClick={() => dispatch(Actions.doneTodo(index, !done))} />
                </span>
                <span className="todo__text" >{text}</span>
            </section>
            <section className="todo__right">
                <div className="todo__sort">
                    <button onClick={() => index > 0 ? dispatch(Actions.moveUpTodo(index)) : null}>UP</button>
                    <button onClick={() => dispatch(Actions.moveDownTodo(index))}>DOWN</button>
                </div>
                <button onClick={() => dispatch(Actions.removeTodo(index))}>REMOVE</button>
            </section>
        </div>
    )
};

export default Todo;


