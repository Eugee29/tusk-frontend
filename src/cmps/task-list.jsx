import { Droppable } from 'react-beautiful-dnd'
import { TaskPreview } from './task-preview'
import { useState } from 'react'
import { useEffect } from 'react'

export const TaskList = ({ tasks, groupId, isOpen, toggleLabels }) => {

// console.log('tasks from task-list', groupId);
// console.log('tasks from task-list', tasks);

  return (
    // Setting each task list to be a droppable area only for other tasks
    <Droppable droppableId={groupId} type='TASK'>
      {provided => (
        <div className='task-list' {...provided.droppableProps} ref={provided.innerRef}>
          {tasks.map((task, index) => <TaskPreview key={task.id} groupId={groupId} task={task} index={index} toggleLabels={toggleLabels} isOpen={isOpen} />)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}