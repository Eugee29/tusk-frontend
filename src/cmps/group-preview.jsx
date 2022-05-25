import React from "react"
import { TaskPreview } from "./task-preview"

export function GroupPreview({ group }) {

    return <section className="group-preview">
        <h2 className="group-title"> {group.title} </h2>
        <section className="tasks-container">
            {group.tasks.map(task => {
                return ( 
                    <TaskPreview key={task.id} task={task} />
                   )
            })}
        </section>
    </section>
}