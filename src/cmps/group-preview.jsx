import React, { useRef } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import { utilService } from "../services/util.service"
import { setModal } from '../store/app/app.actions'

import { BsThreeDots } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { Draggable } from 'react-beautiful-dnd'


import { TaskList } from './task-list'
import { useDispatch } from "react-redux"

export const GroupPreview = ({ group, index, toggleLabels, isLabelsOpen, onUpdateGroup, onUpdateBoard }) => {
  const dispatch = useDispatch()
  const buttonRef = useRef()
  const {boardId} = useParams()

  const params = useParams()
  const [titleText, setTitleText] = useState(group.title)
  const [isAddCardOpen, setIsAddCardOpen] = useState(false)
  const handleChange = (ev) => {
    setTitleText(ev.target.value)
  }

  const toggleAddCard = () => {
    setIsAddCardOpen(!isAddCardOpen)
  }

  const updateTitle = async () => {
    const updatedGroup = { ...group, title: titleText }
    onUpdateGroup(updatedGroup)
  }
  
  const openModal = (ev) => {
    ev.stopPropagation()
    dispatch(setModal({ position: utilService.getPosition(buttonRef.current), category: 'Group actions', title: 'List actions', onUpdateBoard, boardId, group}))
  }


  return (
    // Setting each group to be draggable with the Draggable CMP
    <Draggable draggableId={group.id} index={index} type='GROUP'>
      {(provided, snapshot) => (
        <div ref={provided.innerRef}
          {...provided.draggableProps}>
          <section className={`group-preview ${snapshot.isDragging && !snapshot.isDropAnimating ? 'tilted' : ''}`}>

            <div className="group-title-container" {...provided.dragHandleProps}>
              <textarea className="group-title" defaultValue={titleText} scols="30" rows="10" onChange={handleChange} onBlur={updateTitle}></textarea>
              <button ref={buttonRef} onClick={openModal} className="group-btn"> <BsThreeDots className="dots-icon" /> </button>
            </div>

            <TaskList key={group.id} group={group} toggleLabels={toggleLabels} isLabelsOpen={isLabelsOpen} isAddCardOpen={isAddCardOpen} toggleAddCard={toggleAddCard} onUpdateGroup={onUpdateGroup} />

            {!isAddCardOpen && <div className="add-btn-container">
              <button className="add-btn" onClick={toggleAddCard}> <AiOutlinePlus /> Add a card</button>
            </div>}

          </section>
        </div>
      )}
    </Draggable >
  )
}