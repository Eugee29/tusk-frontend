import React, { useEffect, useState, useRef } from 'react'

import { Modal } from "./modal"

export function TaskDetailsCover({ task }) {

   const [isOpen, setIsOpen] = useState(false)
   const [modalName, setModalName] = useState('')

   const onOpenModal = () => {
      setIsOpen(!isOpen)
   }

   const onCloseModal = () => {
      setIsOpen(false)
   }

   const onOpenModalDynamic = (name) => {
      debugger
      if (!name) setModalName('')
      if (name === modalName) setModalName('')
      else setModalName(name)
   }

   
   return (
      <header>

         {task?.style?.bgColor && <div className="task-details-cover color" style={{ backgroundColor: `${task.style.bgColor}` }}>
            <button onClick={ () => onOpenModalDynamic('Cover')} >Cover</button>
         </div>}

         {task?.style?.imgURL && <div className="task-details-cover img " style={{ backgroundImage: `url('${task.style.imgURL}')` }}>
            <button onClick={ () => onOpenModalDynamic('Cover')} >Cover</button>
         </div>}

         {modalName && <Modal task={task} onOpenModalDynamic={onOpenModalDynamic} category={modalName}></Modal>}

      </header>

   )
}