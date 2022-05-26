import { TaskPreview } from './task-preview'

export const TaskList = ({ tasks/*, provided */ }) => {
  return (
    <div className='task-list'>
      {tasks.map((task, index) => <TaskPreview
        key={task.id}
        task={task}
      // index={index}
      // innerRef={provided.innerRef} 
      />)}
      {/* {provided.placeholder} */}
    </div>
  )
}