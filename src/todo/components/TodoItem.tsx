
import { Todo } from '../interfaces/interfaces'

interface TodoItemProps {
    todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {

    const handleDoubleClick = () => {
        console.log('handleDoubleClick')
    }


  return (
    <li onDoubleClick={handleDoubleClick}>
        {todo.description}
    </li>
  )
}

export default TodoItem