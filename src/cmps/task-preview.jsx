
import { Draggable } from 'react-beautiful-dnd'
import { RiPencilLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { MdOutlineSubject } from 'react-icons/md'

import styled from "styled-components"

export const TaskPreview = ({ task, groupId, index }) => {
  const navigate = useNavigate()
  const onOpenDetails = (ev) => {
    ev.stopPropagation()
    navigate(`${groupId}/${task.id}`)
  }

  const getTaskStyle = () => {
    if (task.style) {
      if (task.style.imgURL) {
        return ` background-image: url(${task.style.imgURL}) `
      }
      if (task.style.bgColor) {
        return ` background-color: ${task.style.bgColor} `
      }

    } else {
      return ''
    }
  }

  const Container = styled.div`
  ${getTaskStyle()}
`

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
    // Setting each task to be draggable
    <Draggable draggableId={task.id} index={index} type='TASK' >
      {provided => (
        <Container className={getTaskClass()} onClick={onOpenDetails} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}  >
          <div className='task-title-container'>
            <h2 className='task-title'> {task.title} </h2>
            {task.description && (!task.style.bgColor) && (!task.style.imgURL)
              && <MdOutlineSubject />}
          </div>
          <button className='edit-btn'> <RiPencilLine className='btn-icon' /> </button>
        </Container>
      )}
    </Draggable >
  )
}