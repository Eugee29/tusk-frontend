import { TodoPreview } from './todo-preview'

export const TodoList = ({ checklist, onUpdateChecklist }) => {

  const { todos } = checklist

  const onUpdateTodo = (todoToUpdate) => {
    const updatedTodos = todos.map(todo => todo.id === todoToUpdate.id ? todoToUpdate : todo)
    onUpdateChecklist({ ...checklist, todos: updatedTodos })
  }

  return (
    <ul className='todo-list'>
      {todos.map(todo => <TodoPreview key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} />)}
    </ul>
  )
}