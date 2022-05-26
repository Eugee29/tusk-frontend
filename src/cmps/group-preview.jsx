import React from "react"
import { BsThreeDots } from 'react-icons/bs'
import { Draggable } from 'react-beautiful-dnd'

import { TaskList } from './task-list'

export function GroupPreview({ group, index }) {

  return (
    <Draggable draggableId={group.id} index={index} type='GROUP'>
      {(provided) => (
        <section className="group-preview"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="group-title-container"
            {...provided.dragHandleProps}
          >
            <textarea className="group-title" name="" defaultValue={group.title} scols="30" rows="10"></textarea>
            <button> <BsThreeDots /> </button>
          </div>
          <TaskList key={group.id} groupId={group.id} tasks={group.tasks} />
        </section>
      )
      }
    </Draggable >
  )
}