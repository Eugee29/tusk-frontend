import { Droppable } from 'react-beautiful-dnd'
import { TaskPreview } from './task-preview'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

// ?
import { boardService } from '../../services/board.service'

export const TaskList = ({ group, board, isLabelsOpen, toggleLabels, isAddCardOpen, toggleAddCard, onUpdateGroup, onUpdateBoard }) => {
  const [cardText, setCardText] = useState('')

  const handleChange = ({ target, nativeEvent }) => {
    if (nativeEvent.inputType === 'insertLineBreak') return onAddCard()
    setCardText(target.value)
  }

  const onAddCard = () => {
    toggleAddCard()
    if (!cardText) return
    const taskToAdd = boardService.getEmptyTask(cardText)
    addCard(taskToAdd)
    setCardText('')
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
      group: {
        id: group.id,
        title: group.title,
      }
    }
    onUpdateGroup(updatedGroup, activity)
  }

  return (
    // Setting each task list to be a droppable area only for other tasks
    <Droppable droppableId={group.id} type='TASK'>
      {provided => (
        <div className='task-list' {...provided.droppableProps} ref={provided.innerRef}>
          {group.tasks.map((task, index) => !task.archivedAt && <TaskPreview key={task.id} board={board} groupId={group.id} task={task} index={index} toggleLabels={toggleLabels} isLabelsOpen={isLabelsOpen} onUpdateBoard={onUpdateBoard} />)}
          {provided.placeholder}
          {isAddCardOpen && <div className="add-card-container">
            <textarea autoFocus onBlur={onAddCard} placeholder='Enter a title for this card...' onChange={handleChange} value={cardText}></textarea>
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

