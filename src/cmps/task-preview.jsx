import { useNavigate } from 'react-router-dom'

import { RiPencilLine } from 'react-icons/ri'
import { MdOutlineSubject } from 'react-icons/md'

export function TaskPreview({ task, groupId }) {
  const navigate = useNavigate()


  const onOpenDetails = (ev) => {
    ev.stopPropagation()
    navigate(`${groupId}/${task.id}`)
  }

  const getTaskStyle = () => {
    if (task.style) {
      if (task.style.imgURL) {
        return { backgroundImage: `url(${task.style.imgURL})` }
      }
      if (task.style.bgColor) {
        return { backgroundColor: `${task.style.bgColor}` }
      }

    } else {
      return ''
    }
  }

  const getTaskClass = () => {
    if (task.style.bgColor) {
      return 'task-preview styled'
    } else if (task.style.imgURL) {
      return 'task-preview styled img'
    } else {
      return 'task-preview'
    }
  }

  return (
    <section className={getTaskClass()} onClick={onOpenDetails} style={getTaskStyle()}>
      <div className='task-title-container'>
        <h2 className='task-title'> {task.title} </h2>
        {task.description && (!task.style.bgColor) && (!task.style.imgURL)
         && <MdOutlineSubject/>}
      </div>
      <button className='edit-btn'> <RiPencilLine className='btn-icon' /> </button>
      {}
    </section>
  )
}