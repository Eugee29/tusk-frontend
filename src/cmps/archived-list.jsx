import { ArchivedPreview } from './archived-preview'

export function ArchivedList({ board, onUpdateBoard }) {

   if (!board.groups) return

   const groups = board.groups.map(group => group.tasks.map(task => ({groupId: group.id, task})))
   console.log(groups);

   const tasks = []
   for (let i = 0; i < groups.length; i++) { tasks.push(...groups[i]) }

   console.log(tasks);
   return (
      <div className='group-preview archived'>
         <div className="task-list archived">
            {tasks.map((task, index) => task.task.archivedAt && <ArchivedPreview key={task.id} board={board} groupId={task.groupId} task={task.task} index={index} onUpdateBoard={onUpdateBoard} />)}
         </div>
      </div>
   )
}
