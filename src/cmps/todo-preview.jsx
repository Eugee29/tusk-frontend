import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'

export const TodoPreview = ({ todo }) => {

  return (
    <li className='todo-preview'>
      {todo.isDone ?
        <ImCheckboxChecked className='checkbox checked' />
        :
        <ImCheckboxUnchecked className='checkbox unchecked' />
      }
      <h3 className={`todo-title ${todo.isDone && 'crossed'}`}>{todo.title}</h3>
    </li>
  )
}