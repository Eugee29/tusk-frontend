import { TodoPreview } from './todo-preview'

export const TodoList = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => <TodoPreview key={todo.id} todo={todo} />)}
    </ul>
  )
}