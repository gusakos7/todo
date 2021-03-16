import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter({});

const todosSlice = createSlice({
    name: 'todos',
    initialState: todosAdapter.getInitialState({
        counter: 0
    }),
    reducers: {
        addTodo: (state, action) => {
            todosAdapter.addOne(state, {
                text: action.payload,
                id: state.counter,
                done: false
            });
            state.counter++;
        }
        ,
        doneTodo: (state, action) => {
            todosAdapter.updateOne(state, {
                id: action.payload,
                changes: { done: state.entities[action.payload].done }
            })
        }
        ,
        removeTodo: todosAdapter.removeOne
        ,
        moveUp: (state, action) => {
            const todo = state.entities.find((todo) => todo.id === action.payload);
            const index = state.entities.indexOf(todo);
            if (index > 0) {
                const newArr = state.entities.filter((todo) => todo.id !== action.payload);
                newArr.splice(index - 1, 0, todo);
                return {
                    ...state,
                    todos: newArr
                }
            }
        },
        moveDown: (state, action) => {
            const todo = state.entities.find((todo) => todo.id === action.payload);
            const index = state.entities.indexOf(todo);
            if (index < state.entities.length) {
                const todo = state.entities.find((todo) => todo.id === action.payload);
                const newArr = state.entities.filter((todo) => todo.id !== action.payload);
                newArr.splice(index + 1, 0, todo);
                state.entities = newArr;
            }
        }
        // ,
        // incrementCounter: (state) => {
        //     state.counter++;
        // }
    }
})

export const selectors = todosAdapter.getSelectors(state => state.todosList);

export const { addTodo, doneTodo, removeTodo, moveUp, moveDown, incrementCounter } = todosSlice.actions;

export default todosSlice.reducer;