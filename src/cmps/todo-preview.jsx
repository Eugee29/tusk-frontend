import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { useEffect, useRef, useState } from 'react'
import { Modal } from '../cmps/modal'

export const TodoPreview = (props) => {
  const [todo, setTodo] = useState(props.todo)
  const textRef = useRef()
  const [isEdit, setIsEdit] = useState(false)
  // const [menuPos, setMenuPos] = useState(null)

  var position


  useEffect(() => { position = getPosition() }, [])

  const menuRef = useRef()

  const getPosition = () => {
    if (!menuRef.current) return
    const { top, left } = menuRef.current.getBoundingClientRect()
    console.log(top, left)
    return { top: top, left: left }
  }

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

        >
        </textarea>
        <div className='controls'>
          <div className='btn-container' onMouseDown={e => e.preventDefault()}>
            <button className='save' onClick={onUpdateTodo}>Save</button>
            <button className='discard-container' onClick={onDiscardChanges}><VscClose className='discard' /></button>
          </div>
          <div className='menu-container' onMouseDown={e => e.preventDefault()} ref={menuRef} /*onClick={(e) => { e.stopPropagation(); props.setModalPos(getPosition()) }}*/>
            <BsThreeDots className='menu' />
          </div>
        </div>
      </div>
      {/* {menuPos && <Modal position={menuPos} />} */}
    </li >
  )
}