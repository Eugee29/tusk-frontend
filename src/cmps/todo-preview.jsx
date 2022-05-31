import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from '../store/app/app.actions'
import { utilService } from '../services/util.service'

export const TodoPreview = (props) => {
  const [todo, setTodo] = useState(props.todo)
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useDispatch()
  const textRef = useRef()
  const menuRef = useRef()

  const onCheck = () => {
    const newTodo = { ...props.todo, isDone: !props.todo.isDone }
    props.updateTodo(newTodo)
    setTodo(newTodo)
  }

  const handleChange = ({ target }) => {
    setTodo({ ...todo, title: target.value })
  }

  const onUpdateTodo = (e) => {
    props.updateTodo(todo)
    setIsEdit(false)
    textRef.current.blur()
  }

  const onDiscardChanges = (e) => {
    console.log(e)
    setIsEdit(false)
    textRef.current.blur()
    setTodo(props.todo)
  }

  const calcHeight = (value) => {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length
    const newHeight = 20 + numberOfLineBreaks * 20
    return newHeight
  }

  const onOpenModal = (e) => {
    e.stopPropagation()
    const position = utilService.getPosition(menuRef.current)
    position.top += 30
    dispatch(setModal({
      position,
      category: 'todo-actions',
      title: 'Item actions',
      props: {
        checklist: props.checklist,
        updateChecklist: props.updateChecklist,
        todoId: props.todo.id
      }
    }))
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

      <div className={`title-container ${isEdit ? 'edit' : ''}`}>
        <textarea
          className={`todo-title ${props.todo.isDone && !isEdit ? 'crossed' : ''}`}
          value={todo.title}
          onChange={handleChange}
          onClick={(e) => e.target.select()}
          onFocus={() => setIsEdit(true)}
          onBlur={() => setIsEdit(false)}
          ref={textRef}
          style={{ height: calcHeight(todo.title) }}
        />
        <div className='controls' >
          <div className='btn-container' onMouseDown={e => e.preventDefault()} >
            <button className='save' onClick={onUpdateTodo}>Save</button>
            <button className='discard-container' onClick={onDiscardChanges}><VscClose className='discard' /></button>
          </div>
          <div className='menu-container' onMouseDown={e => e.preventDefault()} onClick={onOpenModal} ref={menuRef}>
            <BsThreeDots className='menu' />
          </div>
        </div>
      </div>
    </li >
  )
}