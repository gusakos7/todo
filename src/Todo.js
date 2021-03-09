import React from 'react'
import './Todo.css';
import * as Actions from './actions';
import { useDispatch, useSelector } from 'react-redux';

const Todo = ({ text, id }) => {
    const todos = useSelector(state => state.todos);
    const index = todos.findIndex(todo => id === todo.id);
    const done = useSelector(state => state.todos[index].done);
    const dispatch = useDispatch();

    return (
        <div className={`todo${done ? '__done' : ''}`}>
            <section className="todo__left">
                <span className="checkbox">

                    <input id="checkbox" type="checkbox" onClick={() => dispatch(Actions.doneTodo(index))} />
                </span>
                <span className="todo__text" >{text}</span>
            </section>
            <section className="todo__right">
                <div className="todo__sort">
                    <button onClick={() => dispatch(Actions.moveUpTodo(index))}>UP</button>
                    <button onClick={() => dispatch(Actions.moveDownTodo(index))}>DOWN</button>
                </div>
                <button onClick={() => dispatch(Actions.removeTodo(index))}>REMOVE</button>
            </section>
        </div>
    )
};

export default Todo;


