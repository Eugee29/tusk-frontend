
import { Draggable } from 'react-beautiful-dnd'

import { useNavigate } from 'react-router-dom'

import { LabelList } from './label-list'

import { RiPencilLine } from 'react-icons/ri'
import { MdOutlineSubject } from 'react-icons/md'
import { IoMdCheckboxOutline } from 'react-icons/io'

import styled from "styled-components"

export function TaskPreview({ task, groupId, index }) {
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
    <Draggable draggableId={task.id} index={index} type='TASK' >
      {provided => (
        <Container className={getTaskClass()} onClick={onOpenDetails} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}  >
          {task.labelIds.length && (!task.style.bgColor) && (!task.style.imgURL) && <LabelList labelIds={task.labelIds} />}
          <div className='task-title-container'>
            <h2 className='task-title'> {task.title} </h2>
            {task.description && (!task.style.bgColor) && (!task.style.imgURL)
              && <MdOutlineSubject className='lines-icon' />}
          </div>
          <button className='edit-btn'> <RiPencilLine className='btn-icon' /> </button>
        </Container>
      )}
    </Draggable >
  )
}