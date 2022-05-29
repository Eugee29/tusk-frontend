import { Droppable } from 'react-beautiful-dnd'
import { TaskPreview } from './task-preview'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

import { BsThreeDots } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

export const TaskList = ({ tasks, groupId, isOpen, toggleLabels, isAddCardOpen, toggleAddCard }) => {

   return (
      // Setting each task list to be a droppable area only for other tasks
      <Droppable droppableId={groupId} type='TASK'>
         {provided => (
            <div className='task-list' {...provided.droppableProps} ref={provided.innerRef}>
               {tasks.map((task, index) => <TaskPreview key={task.id} groupId={groupId} task={task} index={index} toggleLabels={toggleLabels} isOpen={isOpen} />)}
               {provided.placeholder}
               {isAddCardOpen && <div className="add-card-container">
                  <textarea autoFocus onBlur={toggleAddCard} placeholder='Enter a title for this card...'></textarea>
                  <div className='btn-container'>
                     <button className='add-btn'>Add card</button>
                     <button className='x-btn' onClick={toggleAddCard}> <IoMdClose className='x-icon' /> </button>
                  </div>
               </div>}
            </div>
         )
         }
      </Droppable >
   )
}

