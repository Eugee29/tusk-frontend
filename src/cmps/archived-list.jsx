import { ArchivedPreview } from './archived-preview'

export function ArchivedList({ board, onUpdateBoard }) {

   if (!board.groups) return

   return (
      <div className='group-preview archived'>
         {board.groups.map(group =>
            <div key={group.id} className="task-list archived">
               {group.tasks.map((task, index) => task.archivedAt &&
                  <div key={task.id} className="task-preview-handle">
                     <ArchivedPreview  board={board} groupId={group.id} task={task} index={index} onUpdateBoard={onUpdateBoard} />
                  </div>)
               }
            </div>

         )}

      </div>
   )
}
