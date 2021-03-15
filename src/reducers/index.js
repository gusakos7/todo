
// const initialState = {
//     counter: 0,
//     todos: []
// };

// export const todosReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.payload,
//                         id: state.counter,
//                         done: false
//                     }
//                 ],
//                 counter: state.counter + 1
//             };

//         case 'DONE_TODO':
//             // const newAr = state.todos;
//             // newAr[action.payload.index].done = action.payload.bool;
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => {
//                     if (todo.id !== action.payload) {
//                         return todo;
//                     }
//                     return {
//                         ...todo,
//                         done: !todo.done
//                     }
//                 })
//             };

//         case 'REMOVE_TODO':
//             const newArr = state.todos.filter((todo, i) => action.payload !== i);
//             return { ...state, todos: newArr };

//         case 'MOVE_UP':
//             if (action.payload > 0) {
//                 const temp = state.todos.filter((t, i) => action.payload !== i);
//                 temp.splice(action.payload - 1, 0, state.todos[action.payload])
//                 return { ...state, todos: temp };
//             }
//             else return state;

//         case 'MOVE_DOWN':
//             if (action.payload < state.todos.length) {
//                 const temp = state.todos.filter((t, i) => action.payload !== i);
//                 temp.splice(action.payload + 1, 0, state.todos[action.payload])
//                 return { ...state, todos: temp };
//             }
//             else return state;
//         default:
//             return state;
//     }
// }

