import { RiPencilLine } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'

export function TaskPreview({ task, groupId }) {
    const navigate = useNavigate()
    const {boardId} = useParams()

    const onOpenDetails = (ev) => {
        ev.stopPropagation()
        navigate(`${groupId}/${task.id}`)
    }

  return (
    <section className="task-preview" onClick={onOpenDetails}>
      <h2 className='task-title'> {task.title} </h2>
      <button> <RiPencilLine className='btn-icon' /> </button>
    </section>
  )
}