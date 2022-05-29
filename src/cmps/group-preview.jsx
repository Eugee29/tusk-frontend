import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { useParams } from "react-router-dom"

import { updateBoard } from '../store/board/board.action.js'

import { BsThreeDots } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { Draggable } from 'react-beautiful-dnd'

import { TaskList } from './task-list'


export const GroupPreview = ({ group, index, toggleLabels, isOpen }) => {

  const params = useParams()
  const dispatch = useDispatch()

  const board = useSelector(({ boardModule }) => boardModule.board)

  const [titleText, setTitleText] = useState(group.title)
  const [isAddCardOpen, setIsAddCardOpen] = useState(false)

  const handleChange = (ev) => {
    setTitleText(ev.target.value)
  }

  const toggleAddCard = () => {
    setIsAddCardOpen(!isAddCardOpen)
    console.log(isAddCardOpen)
  }

  const updateTitle = async () => {
    console.log(group.id)
    const groupToUpdate = board.groups.find(currGroup => currGroup.id === group.id)
    const { groups } = board
    const updatedGroup = { ...groupToUpdate, title: titleText }
    const updatedGroups = groups.map(thisGroup => thisGroup.id === updatedGroup.id ? updatedGroup : thisGroup)
    const updatedBoard = { ...board, groups: updatedGroups }
    // setTask(taskToUpdate) ENABLE WHEN CONNECTING TO BACKEND FOR BETTER USER EXPERIENCE
    await dispatch(updateBoard(updatedBoard))
    // loadTaskAsync()
  }

  return (
    // Setting each group to be draggable with the Draggable CMP
    <Draggable draggableId={group.id} index={index} type='GROUP'>
      {(provided, snapshot) => (
        <div ref={provided.innerRef}
          {...provided.draggableProps}>
          <section className={`group-preview ${snapshot.isDragging && !snapshot.isDropAnimating ? 'tilted' : ''}`}>

          <div className="group-title-container">
            <textarea className="group-title" defaultValue={titleText} scols="30" rows="10" onChange={handleChange} onBlur={updateTitle}></textarea>
            <button className="group-btn"> <BsThreeDots className="dots-icon" /> </button>
            </div>

            <TaskList key={group.id} groupId={group.id} tasks={group.tasks} toggleLabels={toggleLabels} isOpen={isOpen} isAddCardOpen={isAddCardOpen} toggleAddCard={toggleAddCard} />

            {!isAddCardOpen && <div className="add-btn-container">
              <button className="add-btn" onClick={toggleAddCard}> <AiOutlinePlus /> Add a card</button>
            </div>}

          </section>
        </div>
      )}
    </Draggable >
  )
}