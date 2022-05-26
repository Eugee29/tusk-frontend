import React from "react"
import { BsThreeDots } from 'react-icons/bs'
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
            <button> <BsThreeDots /> </button>
          </div>

<<<<<<< HEAD
      <section className="tasks-container">
        <TaskList key={group.id} groupId={group.id} tasks={group.tasks} />
      </section>
=======
          <section className="tasks-container">
            <TaskList key={group.id} tasks={group.tasks} />
          </section>
>>>>>>> 20d46189f1a8511d4f2424787befef9a4bb94df2

        </section>
      )}
    </Draggable>
  )
}