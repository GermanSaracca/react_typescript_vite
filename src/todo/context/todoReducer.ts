import { TodoState, Todo } from "../interfaces/interfaces";

type TodoAction = 
| { type: 'ADD_TODO', payload: Todo }
| { type: 'TOGGLE_TODO', payload: {id: string} }


export const todoReducer = (state: TodoState, action: TodoAction) : TodoState => {

    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
            
        default:
            return state;
    }
}