import { Droppable } from 'react-beautiful-dnd'
import { TaskPreview } from './task-preview'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

// ?
import { boardService } from '../services/board.service'

export const TaskList = ({ group, board, isLabelsOpen, toggleLabels, isAddCardOpen, toggleAddCard, onUpdateGroup }) => {
   const [cardText, setCardText] = useState('')

   const handleChange = (ev) => {
      setCardText(ev.target.value)
   }

   const onAddCard = () => {
      toggleAddCard()
      if (!cardText) return
      // ?
      const taskToAdd = boardService.getEmptyTask(cardText)
      addCard(taskToAdd)
   }

   const addCard = (taskToAdd) => {
      const updatedTasks = [...group.tasks, taskToAdd]
      const updatedGroup = { ...group, tasks: updatedTasks }
      const activity = {
         actionType: 'add task',
         task: {
            id: taskToAdd.id,
            title: taskToAdd.title
         },
         groupTitle: group.title
      }
      onUpdateGroup(updatedGroup, activity)
   }

   return (
      // Setting each task list to be a droppable area only for other tasks
      <Droppable droppableId={group.id} type='TASK'>
         {provided => (
            <div className='task-list' {...provided.droppableProps} ref={provided.innerRef}>
               {group.tasks.map((task, index) => <TaskPreview key={task.id} board={board} groupId={group.id} task={task} index={index} toggleLabels={toggleLabels} isLabelsOpen={isLabelsOpen} />)}
               {provided.placeholder}
               {isAddCardOpen && <div className="add-card-container">
                  <textarea autoFocus onBlur={onAddCard} placeholder='Enter a title for this card...' onChange={handleChange}></textarea>
                  <div className='btn-container'>
                     <button className='add-btn' onClick={onAddCard}>Add card</button>
                     <button className='x-btn' onClick={toggleAddCard}> <IoMdClose className='x-icon' /> </button>
                  </div>
               </div>
               }
            </div>
         )
         }
      </Droppable >
   )
}

