import { TodoPreview } from './todo-preview'

export const TodoList = ({ checklist, updateChecklist }) => {

  const { todos } = checklist

  const updateTodo = (todoToUpdate) => {
    const updatedTodos = todos.map(todo => todo.id === todoToUpdate.id ? todoToUpdate : todo)
    updateChecklist({ ...checklist, todos: updatedTodos })
  }

  return (
    <ul className='todo-list'>
      {todos.map(todo => <TodoPreview key={todo.id} todo={todo} updateChecklist={updateChecklist} checklist={checklist} updateTodo={updateTodo} />)}
    </ul>
  )
}