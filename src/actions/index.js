

export const doneTodo = (index) => {
    return {
        type: 'DONE_TODO',
        payload: index
    };
};

export const addTodo = (input) => {
    return {
        type: 'ADD_TODO',
        payload: input
    }
}

export const removeTodo = (index) => {
    return {
        type: 'REMOVE_TODO',
        payload: index
    };
};

export const moveUpTodo = (index) => {
    return {
        type: 'MOVE_UP',
        payload: index
    };
};

export const moveDownTodo = (index) => {
    return {
        type: 'MOVE_DOWN',
        payload: index
    };
};