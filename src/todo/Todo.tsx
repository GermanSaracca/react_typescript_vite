import React from 'react'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoContext'

const Todo = () => {
  return (
    <TodoProvider>
        <h1>Todo´s</h1>
        <TodoList />
    </TodoProvider>
  )
}

export default Todo