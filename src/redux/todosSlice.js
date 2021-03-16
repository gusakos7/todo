import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter({});

export const { selectAll: selectTodos } = todosAdapter.getSelectors(state => state.todosList);

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
        },
        doneTodo: todosAdapter.updateOne
        ,
        removeTodo: todosAdapter.removeOne
        ,
        moveUp: (state, action) => {
            const todoId = action.payload
            const index = state.ids.indexOf(todoId);
            if (index > 0) {
                const newArr = state.ids.filter(id => id !== todoId);
                newArr.splice(index - 1, 0, todoId);
                state.ids = newArr;
            }
        },
        moveDown: (state, action) => {
            const todoId = action.payload
            const index = state.ids.indexOf(todoId);
            if (index < state.ids.length) {
                const newArr = state.ids.filter(id => id !== todoId);
                newArr.splice(index + 1, 0, todoId);
                state.ids = newArr;
            }
        }

    }
})

export const { addTodo, doneTodo, removeTodo, moveUp, moveDown, incrementCounter } = todosSlice.actions;

export default todosSlice.reducer;