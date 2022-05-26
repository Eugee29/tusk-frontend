import React from "react"
import { TaskList } from "./task-list"
// import { Droppable } from 'react-beautiful-dnd'

export function GroupPreview({ group }) {

  return (
    <section className="group-preview">
      <h2 className="group-title"> {group.title} </h2>
      <section className="tasks-contaier">
        {/* <Droppable droppableId={group.id}> */}
        {/* {provided => ( */}
        <TaskList
          // innerRef={provided.innerRef}
          // {...provided.droppableProps}
          tasks={group.tasks}
        // provided={provided}
        />
        {/* )} */}
        {/* </Droppable> */}
      </section>
    </section>
  )
}