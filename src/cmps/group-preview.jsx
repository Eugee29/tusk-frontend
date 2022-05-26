import React from "react"
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { Draggable } from 'react-beautiful-dnd'

import { TaskList } from './task-list'

export function GroupPreview({ group, index }) {

  return (
    <Draggable draggableId={group.id} index={index} >
      {(provided) => (
        <section className="group-preview"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >

          <div className="group-title-container">
            <textarea className="group-title" name="" defaultValue={group.title} cols="30" rows="10"></textarea>
            <button className="group-btn"> <BsThreeDots className="dots-icon" /> </button>
          </div>

          <section className="tasks-container">
            <TaskList key={group.id} groupId={group.id} tasks={group.tasks} />
          </section>
          <div className="add-btn-container">
            <button className="add-btn"> <AiOutlinePlus/> Add a card</button>
          </div>
        </section>
      )}
    </Draggable>
  )
}