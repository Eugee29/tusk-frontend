import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { useRef, useState } from 'react'

export const TodoPreview = (props) => {
  const [todo, setTodo] = useState(props.todo)
  const textRef = useRef()
  const [isEdit, setIsEdit] = useState(false)


  const onCheck = () => {
    const newTodo = { ...props.todo, isDone: !props.todo.isDone }
    props.updateTodo(newTodo)
    setTodo(newTodo)
  }

  const handleChange = ({ target }) => {
    setTodo({ ...todo, title: target.value })
  }

  const onUpdateTodo = () => {
    setIsEdit(false)
    textRef.current.blur()
    props.updateTodo(todo)
  }

  const onDiscardChanges = () => {
    setIsEdit(false)
    textRef.current.blur()
    console.log(props.todo)
    setTodo(props.todo)
  }

  const calcHeight = (value) => {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length
    // min-height + lines x line-height + padding + border
    const newHeight = 20 + numberOfLineBreaks * 20
    return newHeight
  }

  return (
    <li className='todo-preview'>
      <div className='checkbox-container' onClick={onCheck}>
        {props.todo.isDone ?
          <ImCheckboxChecked className='checkbox checked' />
          :
          <ImCheckboxUnchecked className='checkbox unchecked' />
        }
      </div>

      <div className={`title-container ${isEdit ? 'edit' : ''}`} onClick={() => { if (!isEdit) textRef.current.focus() }}>
        <textarea
          className={`todo-title ${props.todo.isDone ? 'crossed' : ''}`}
          value={todo.title}
          onChange={handleChange}
          onClick={(e) => e.target.select()}
          onFocus={() => setIsEdit(true)}
          onBlur={onUpdateTodo}
          ref={textRef}
          style={{ height: calcHeight(todo.title) }}
        >
        </textarea>
        <div className='controls'>
          <div className='btn-container' onMouseDown={e => e.preventDefault()}>
            <button className='save' onClick={onUpdateTodo}>Save</button>
            <button className='discard-container' onClick={onDiscardChanges}><VscClose className='discard' /></button>
          </div>
          <div className='menu-container' onMouseDown={e => e.preventDefault()}>
            <BsThreeDots className='menu' />
          </div>
        </div>
      </div>
    </li >
  )
}