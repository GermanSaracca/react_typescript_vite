import { createContext, useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { todoReducer } from "./todoReducer";


type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: (id: string) => void;
}

//El {} as TodoContextProps es para engañar a tipescript y decirle que cuando lo consuma ya va a ser de ese tipo
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);


interface TodoProviderProps {
    children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TodoState = {
    todosCount: 2,
    todos: [
        {
            id: "kads823ijoasd211199",
            description: "Comprar pan",
            completed: false
        },
        {
            id: "kads823ijod3111g49",
            description: "Comprar leche",
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

export const TodoProvider = ({children}: TodoProviderProps) => {

     const [todoState, dispatch] =  useReducer(todoReducer, INITIAL_STATE)


     const toggleTodo = (id: string) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: {
                id
            }
        })
    }


    return (
        <TodoContext.Provider value={{ todoState, toggleTodo}}>
            {children}
        </TodoContext.Provider>
    )
}