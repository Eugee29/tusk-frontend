import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setModal } from '../../store/app/app.actions'


export function TaskDetailsCover({ task, updateTask }) {

  const buttonRef = useRef()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   onModal('Cover')
  // }, [task])
  

  const onModal = (category) => {
    dispatch(setModal({ element: buttonRef.current, category, title: category, task, updateTask }))
  }

  return (
    <header>
      {task?.style?.bgColor && <div className="task-details-cover color" style={{ backgroundColor: `${task.style.bgColor}` }}>
        <button ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Cover') }}>Cover</button>
      </div>}

      {task?.style?.imgURL && <div className="task-details-cover img " style={{ backgroundImage: `url('${task.style.imgURL}')` }}>
        <button ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Cover') }}>Cover</button>
      </div>}
    </header>

  )
}