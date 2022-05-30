import React, { useEffect, useState, useRef } from 'react'

import { Modal } from "./modal"

export function TaskDetailsCover({ task }) {

   const [isOpen, setIsOpen] = useState(false)

   const onOpenModal = () => {
      setIsOpen(!isOpen)
   }

   const onCloseModal = () => {
      setIsOpen(false)
   }
   
   return (
      <header>

         {task?.style?.bgColor && <div className="task-details-cover color" style={{ backgroundColor: `${task.style.bgColor}` }}>
            <button onClick={onOpenModal}>Cover</button>
         </div>}

         {task?.style?.imgURL && <div className="task-details-cover img " style={{ backgroundImage: `url('${task.style.imgURL}')` }}>
            <button onClick={onOpenModal}>Cover</button>
         </div>}

         {isOpen && task && <Modal task={task} onCloseModal={onCloseModal} category={'Cover'}></Modal>}

      </header>

   )
}