
import { Draggable } from 'react-beautiful-dnd'

import React from 'react'

import { useNavigate } from 'react-router-dom'

import { LabelList } from './label-list'

import { RiPencilLine } from 'react-icons/ri'
import { MdOutlineSubject } from 'react-icons/md'
import { IoMdCheckboxOutline } from 'react-icons/io'

export const TaskPreview = ({ task, groupId, index }) => {
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
    if (task.style) {
      if (task.style.bgColor) {
        return 'task-preview styled'
      } else if (task.style.imgURL) {
        return 'task-preview styled img'
      }
      return 'task-preview'
    }
  }

  return (
    <Draggable draggableId={task.id} index={index} type='TASK' >
      {provided => (
        <div className='task-preview-handle' {...provided.draggableProps} {...provided.dragHandleProps}>
          <section className={getTaskClass()} onClick={onOpenDetails} ref={provided.innerRef} style={getTaskStyle()}  >
            {task.labelIds.length && (!task.style.bgColor) && (!task.style.imgURL) && <LabelList labelIds={task.labelIds} />}
            <div className='task-title-container'>
              <h2 className='task-title'> {task.title} </h2>
              {task.description && (!task.style.bgColor) && (!task.style.imgURL)
                && <MdOutlineSubject />}
                {task.checklist && task.checklist.length && (!task.style.bgColor) && (!task.style.imgURL)
                && <React.Fragment> <IoMdCheckboxOutline /> <span> {task.checklist.length} </span> </React.Fragment>}
            </div>
            <button className='edit-btn'> <RiPencilLine className='btn-icon' /> </button>
          </section>
        </div>
      )}
    </Draggable >
  )
}