import { Draggable } from 'react-beautiful-dnd'
import { RiPencilLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

export function TaskPreview({ task, groupId, index }) {
  const navigate = useNavigate()
  const onOpenDetails = (ev) => {
    ev.stopPropagation()
    navigate(`${groupId}/${task.id}`)
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <section className="task-preview" onClick={onOpenDetails}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h2 className='task-title'> {task.title} </h2>
          <button> <RiPencilLine className='btn-icon' /> </button>
        </section>
      )}
    </Draggable>
  )
}