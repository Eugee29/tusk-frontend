import { Droppable } from 'react-beautiful-dnd'
import { TaskPreview } from './task-preview'

export const TaskList = ({ tasks, groupId }) => {

  return (
    <Droppable droppableId={groupId}>
      {(provided) => (
        <div className='task-list' {...provided.droppableProps} ref={provided.innerRef}>
          {tasks.map((task, index) => <TaskPreview key={task.id} groupId={groupId} task={task} index={index} />)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}