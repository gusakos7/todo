
const initialState = {
    counter: 0,
    todos: []
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const todo = {
                text: action.payload,
                id: state.counter,
                done: false
            };
            return { ...state, todos: [...state.todos, todo], counter: state.counter + 1 }
        case 'DONE_TODO':
            const newAr = state.todos;
            newAr[action.payload.index].done = action.payload.bool;
            return { ...state, todos: newAr };

        case 'REMOVE_TODO':
            const newArr = state.todos.filter((todo, i) => action.payload !== i);
            return { ...state, todos: newArr };

        case 'MOVE_UP':
            if (action.payload > 0) {
                const temp = state.todos.filter((t, i) => action.payload !== i);
                temp.splice(action.payload - 1, 0, state.todos[action.payload])
                return { ...state, todos: temp };
            }
            else return state;

        case 'MOVE_DOWN':
            if (action.payload < state.todos.length) {
                const temp = state.todos.filter((t, i) => action.payload !== i);
                temp.splice(action.payload + 1, 0, state.todos[action.payload])
                return { ...state, todos: temp };
            }
            else return state;
        default:
            return state;
    }
}

