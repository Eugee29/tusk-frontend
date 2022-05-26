import { TaskPreview } from './task-preview'

export const TaskList = ({ tasks }) => {

  return (
    <div className='task-list'>

      {tasks.map(task => <TaskPreview key={task.id} task={task} />)}

    </div>
  )
}