import { Droppable } from 'react-beautiful-dnd'
import { TaskPreview } from './task-preview'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BsThreeDots } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

import { updateBoard } from '../store/board/board.action.js'
import { boardService } from '../services/board.service'

export const TaskList = ({ tasks, groupId, isOpen, toggleLabels, isAddCardOpen, toggleAddCard, onUpdateBoard }) => {

  const dispatch = useDispatch()

  const board = useSelector(({ boardModule }) => boardModule.board)
  const [cardText, setCardText] = useState('')
  // const [currTasks, setCurrTasks] = useState(tasks)

  const handleChange = (ev) => {
    setCardText(ev.target.value)
  }

  const onAddCard = async () => {
    toggleAddCard()
    if (!cardText) return
    const taskToAdd = await boardService.getEmptyTask(cardText)
    addCard(taskToAdd)
  }

  const addCard = async (taskToAdd) => {
    const group = board.groups.find(group => group.id === groupId)
    const updatedTasks = [...tasks, taskToAdd]
    const updatedGroup = { ...group, tasks: updatedTasks }
    const updatedGroups = board.groups.map(group => group.id === updatedGroup.id ? updatedGroup : group)
    const updatedBoard = { ...board, groups: updatedGroups }
    onUpdateBoard(updatedGroups)
    // setCurrTasks(updatedTasks)
  }

  // console.log(currTasks)

  return (
    // Setting each task list to be a droppable area only for other tasks
    <Droppable droppableId={groupId} type='TASK'>
      {provided => (
        <div className='task-list' {...provided.droppableProps} ref={provided.innerRef}>
          {tasks.map((task, index) => <TaskPreview key={task.id} groupId={groupId} task={task} index={index} toggleLabels={toggleLabels} isOpen={isOpen} />)}
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

