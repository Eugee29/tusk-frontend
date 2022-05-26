import React from "react"
import { TaskPreview } from "./task-preview"

import {BsThreeDots} from 'react-icons/bs'

export function GroupPreview({ group }) {

    

    return <section className="group-preview">
        <div className="group-title-container">
        <textarea className="group-title" name="" defaultValue={group.title} cols="30" rows="10"></textarea>
        <button> <BsThreeDots/> </button>
        </div>
        <section className="tasks-container">
            {group.tasks.map(task => {
                return ( 
                    <TaskPreview key={task.id} task={task} />
                   )
            })}
        </section>
    </section>
}