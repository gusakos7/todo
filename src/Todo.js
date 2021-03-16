import React from 'react'
import './Todo.css';
import { useDispatch } from 'react-redux';
import { doneTodo, moveDown, moveUp, removeTodo } from './redux/todosSlice';

import { Checkbox } from '@material-ui/core';

import { Button } from '@material-ui/core';

const Todo = ({ text, done, id }) => {

    const dispatch = useDispatch();
    // console.log(text, done);
    return (
        <div className={`todo${done ? '__done' : ''}`}>
            <section className="todo__left">
                {/* <span className="checkbox"> */}

                <Checkbox
                    className="todo__checkbox"
                    color="default"
                    checked={done}
                    onClick={() => dispatch(doneTodo(id))}
                />
                <span className="todo__text" >{text}</span>
            </section>
            <section className="todo__right">
                <div className="todo__sort">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(moveUp(id))}
                    >
                        UP
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(moveDown(id))}
                    >
                        DOWN
                    </Button>
                </div>
                <Button
                    className="todo__btn__rm"
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(removeTodo(id))}
                >
                    REMOVE
                </Button>
            </section>
        </div>
    )
};

export default Todo;