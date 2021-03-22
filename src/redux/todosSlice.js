import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


const API_URL = process.env.REACT_APP_HASURA_URL;
const HASURA_KEY = process.env.REACT_APP_HASURA_SECRET;



export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async () => {
        const response = await axios.post(API_URL, {
            query: `
                query GetTodos {
                    todo {
                        id
                        text
                        done
                        created_at
                        updated_at
                    }
                }
            `
        }, {
            headers: {
                'x-hasura-admin-secret': HASURA_KEY
            }
        })
        return response.data.data.todo;
    }
)

export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (text) => {
        const response = await axios.post(API_URL, {
            query: `
                mutation InsertTodo($text: String!) {
                    insert_todo(objects: {text: $text}) {
                        returning {
                            id
                            text
                            done
                            created_at
                            updated_at
                        }
                    }
                }
            `,
            variables: {
                text: text
            }
        }, {
            headers: {
                'x-hasura-admin-secret': HASURA_KEY
            }
        })
        return response.data.data.insert_todo.returning[0];
    }
);

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async ({ id, done }) => {
        const response = await axios.post(API_URL, {
            query: `
                mutation UpdateTodo($id: Int!,$done: Boolean!) {
                    update_todo_by_pk(pk_columns: {id: $id}, _set: {done: $done}) {
                        id
                        text
                        done
                        created_at
                        updated_at
                    }
                }
            `,
            variables: {
                id,
                done
            }
        }, {
            headers: {
                'x-hasura-admin-secret': HASURA_KEY
            }
        })
        return response.data.data.update_todo_by_pk;
    }
);

export const removeTodo = createAsyncThunk(
    'todos/removeTodo',
    async (id) => {
        const response = await axios.post(API_URL, {
            query: `
                mutation RemoveTodo($id: Int!) {
                    delete_todo_by_pk(id: $id) {
                        id
                    }
                }
            `,
            variables: {
                id
            }
        }, {
            headers: {
                'x-hasura-admin-secret': HASURA_KEY
            }
        })
        return response.data.data.delete_todo_by_pk.id;
    }
)


const todosAdapter = createEntityAdapter({});

export const { selectAll: selectTodos } = todosAdapter.getSelectors(state => state.todosList);


const todosSlice = createSlice({
    name: 'todos',
    initialState: todosAdapter.getInitialState({
        loading: false
    }),
    reducers: {
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

    },
    extraReducers: {
        [getTodos.fulfilled]: todosAdapter.setAll,
        [addTodo.pending]: (state) => {
            state.loading = true;
        },
        [addTodo.fulfilled]: (state, action) => {
            todosAdapter.addOne(state, action.payload);
            state.loading = false;
        },
        [updateTodo.fulfilled]: todosAdapter.upsertOne,
        [removeTodo.fulfilled]: todosAdapter.removeOne
    }
})

export const { moveUp, moveDown } = todosSlice.actions;

export default todosSlice.reducer;