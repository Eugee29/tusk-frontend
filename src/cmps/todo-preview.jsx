import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { useRef, useState } from 'react'

export const TodoPreview = ({ todo, onUpdateTodo }) => {

  const [isEdit, setIsEdit] = useState(false)

  const onCheck = () => {
    const newTodo = { ...todo, isDone: !todo.isDone }
    onUpdateTodo(newTodo)
  }

  const handleChange = () => {
    console.log('TODO')
  }

  const textRef = useRef()

  return (
    <li className='todo-preview'>
      <div className='checkbox-container' onClick={onCheck}>
        {todo.isDone ?
          <ImCheckboxChecked className='checkbox checked' />
          :
          <ImCheckboxUnchecked className='checkbox unchecked' />
        }
      </div>

      <div className={`title-container ${isEdit ? 'edit' : ''}`} onClick={() => textRef.current.focus()}>
        <textarea className={`todo-title ${todo.isDone ? 'crossed' : ''}`} value={todo.title} onChange={handleChange} onClick={(e) => e.target.select()} rows="1" onFocus={() => setIsEdit(true)} onBlur={() => setIsEdit(false)} ref={textRef} ></textarea>
        <div className='controls'>
          <div className='btn-container' onMouseDown={e => e.preventDefault()}>
            <button className='save'>Save</button>
            <button className='close-container'><VscClose className='close' /></button>
          </div>
          <div className='menu-container' onMouseDown={e => e.preventDefault()}>
            <BsThreeDots className='menu' />
          </div>
        </div>
      </div>
    </li >
  )
}