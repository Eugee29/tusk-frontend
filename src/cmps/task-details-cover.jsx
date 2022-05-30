import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { utilService } from '../services/util.service'
import { setModal } from '../store/app/app.actions'
// import { Modal } from "./modal"

export function TaskDetailsCover({ task }) {

  const buttonRef = useRef()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [modalName, setModalName] = useState('')

  const onOpenModal = () => {
    setIsOpen(!isOpen)
  }

  const onCloseModal = () => {
    setIsOpen(false)
  }

  const onOpenModalDynamic = (name) => {
    if (!name) setModalName('')
    if (name === modalName) setModalName('')
    else setModalName(name)
  }

  return (
    <header>

      {task?.style?.bgColor && <div className="task-details-cover color" style={{ backgroundColor: `${task.style.bgColor}` }}>
        <button ref={buttonRef} onClick={(e) => { e.stopPropagation(); dispatch(setModal({ position: utilService.getPosition(buttonRef.current) })) }}>Cover</button>
      </div>}

      {task?.style?.imgURL && <div className="task-details-cover img " style={{ backgroundImage: `url('${task.style.imgURL}')` }}>
        <button ref={buttonRef} onClick={(e) => { e.stopPropagation(); dispatch(setModal({ position: utilService.getPosition(buttonRef.current) })) }}>Cover</button>
      </div>}

      {/* {modalName && <Modal task={task} onOpenModalDynamic={onOpenModalDynamic} category={modalName}></Modal>} */}

    </header>

  )
}