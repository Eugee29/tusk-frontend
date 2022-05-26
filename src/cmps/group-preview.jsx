import React from "react"
import { BsThreeDots } from 'react-icons/bs'

import { TaskList } from './task-list'

export function GroupPreview({ group }) {

  return (
    <section className="group-preview">

      <div className="group-title-container">
        <textarea className="group-title" name="" defaultValue={group.title} cols="30" rows="10"></textarea>
        <button> <BsThreeDots /> </button>
      </div>

      <section className="tasks-container">
        <TaskList key={group.id} groupId={group.id} tasks={group.tasks} />
      </section>

    </section>
  )
}