import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'

export const TodoPreview = ({ todo }) => {

  return (
    <li className='todo-preview'>
      {todo.isDone ?
        <ImCheckboxChecked className='checkbox checked' />
        :
        <ImCheckboxUnchecked className='checkbox unchecked' />
      }
      <div className='title-container'>
        <textarea className={`todo-title ${todo.isDone && 'crossed'}`} value={todo.title}></textarea>
        <div className='menu-container'><BsThreeDots className='menu' /></div>
      </div>
    </li >
  )
}