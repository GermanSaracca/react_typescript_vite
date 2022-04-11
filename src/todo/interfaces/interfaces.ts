
//Declaramos los tipos de datos de un TODO
export interface Todo {
    id: string;
    description: string;
    completed: boolean;
}
// Declaramos los tipos de datos del estado del todoContext
export interface TodoState {
    todosCount: number;
    todos: Todo[];
    completed: number;
    pending: number;
}