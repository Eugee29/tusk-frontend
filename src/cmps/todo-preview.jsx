import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
// import { updateBoard } from '../store/board/board.action'

import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'

export const TodoPreview = (props) => {

  const [todo, setTodo] = useState(props.todo)
  // const dispatch = useDispatch()
  // const boardModule = useSelector(({ boardModule }) => boardModule)
  // const [board, setBoard] = useState(boardModule.board)



  // NEED TO SAVE TO DB
  const onCheck = () => {
    const newTodo = { ...todo, isDone: !todo.isDone }
    setTodo(newTodo)



  }

  return (
    <li className='todo-preview'>
      <div className='checkbox-container' onClick={onCheck}>
        {todo.isDone ?
          <ImCheckboxChecked className='checkbox checked' />
          :
          <ImCheckboxUnchecked className='checkbox unchecked' />
        }
      </div>

      <div className='title-container'>
        <textarea className={`todo-title ${todo.isDone && 'crossed'}`} value={todo.title}></textarea>
        <div className='menu-container'><BsThreeDots className='menu' /></div>
      </div>
    </li >
  )
}