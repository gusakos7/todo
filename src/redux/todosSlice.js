import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter({});

const todosSlice = createSlice({
    name: 'todos',
    initialState: todosAdapter.getInitialState({
        counter: 0
    }),
    reducers: {
        addTodo: (state, action) => {
            // state.todos.push({
            //     text: action.payload,
            //     id: state.counter,
            //     done: false
            // });
            todosAdapter.addOne({
                text: action.payload,
                id: state.counter,
                done: false
            });
            state.counter++;
        },
        doneTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            todo.done = !todo.done;
        },
        removeTodo: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        },
        moveUp: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            const index = state.todos.indexOf(todo);
            if (index > 0) {
                const newArr = state.todos.filter((todo) => todo.id !== action.payload);
                newArr.splice(index - 1, 0, todo);
                return {
                    ...state,
                    todos: newArr
                }
            }
        },
        moveDown: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            const index = state.todos.indexOf(todo);
            if (index < state.todos.length) {
                const todo = state.todos.find((todo) => todo.id === action.payload);
                const newArr = state.todos.filter((todo) => todo.id !== action.payload);
                newArr.splice(index + 1, 0, todo);
                state.todos = newArr;
            }
        }
    }
})

export const { addTodo, doneTodo, removeTodo, moveUp, moveDown } = todosSlice.actions;

export default todosSlice.reducer;