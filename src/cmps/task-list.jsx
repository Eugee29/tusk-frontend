import { TaskPreview } from './task-preview'

export const TaskList = ({ tasks, groupId }) => {

  return (
    <div className='task-list'>

      {tasks.map(task => <TaskPreview key={task.id} groupId={groupId} task={task} />)}

    </div>
  )
}