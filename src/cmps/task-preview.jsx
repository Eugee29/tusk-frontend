
import { Draggable } from 'react-beautiful-dnd'

import React from 'react'

import { useNavigate } from 'react-router-dom'

import { LabelList } from './label-list'

import { RiPencilLine } from 'react-icons/ri'
import { MdOutlineSubject } from 'react-icons/md'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { ImAttachment } from 'react-icons/im'

export const TaskPreview = ({ task, groupId, index, toggleLabels, isOpen }) => {
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

  const getChecklistLength = () => {
    const todosLength = task.checklists.reduce((acc1, checklist) => acc1 += checklist.todos.length, 0)
    const doneLength = task.checklists.reduce((acc2, checklist) => acc2 += getDoneTodos(checklist), 0)
    const activeCount = doneLength + "/" + todosLength
    return activeCount
  }

  const getDoneTodos = (checklist) => {
    let doneTodos = checklist.todos.filter(todo => (todo.isDone))
    return doneTodos.length
  }


  return (
    <Draggable draggableId={task.id} index={index} type='TASK' >
      {provided => (
        <div className='task-preview-handle' {...provided.draggableProps} {...provided.dragHandleProps}>
          <section className={getTaskClass()} onClick={onOpenDetails} ref={provided.innerRef} style={getTaskStyle()}  >
            {task.labelIds.length && (!task.style.bgColor) && (!task.style.imgURL) && <LabelList labelIds={task.labelIds} toggleLabels={toggleLabels} isOpen={isOpen} />}
            <div className='task-title-container'>
              <h2 className='task-title'> {task.title} </h2>
            </div>

            <div className='task-icon-container'>

              <div className='icon-container'>
                {task.description && (!task.style.bgColor) && (!task.style.imgURL)
                  && <MdOutlineSubject />}
                {task.checklists && task.checklists.length && (!task.style.bgColor) && (!task.style.imgURL)
                  && <React.Fragment> <IoMdCheckboxOutline /> <span> {getChecklistLength()} </span> </React.Fragment>}
                {task.attachments && task.attachments.length && (!task.style.bgColor) && (!task.style.imgURL)
                  && <React.Fragment> <ImAttachment /> <span> {task.attachments.length} </span> </React.Fragment>}
                
                {task.dueDate && (!task.style.bgColor) && (!task.style.imgURL)
                  && <React.Fragment> 
                      {/* //TIME// */}
                    </React.Fragment>}
              </div>

              {task.members && task.members.length && (!task.style.bgColor) && (!task.style.imgURL)
                && <div className='member-img-container'>
                  {task.members.map((member) => <a key={member._id} className="member-img"> <img src={member.imgUrl} alt="" /> </a>)}
                </div>}
            </div>

            <button className='edit-btn'> <RiPencilLine className='btn-icon' /> </button>
          </section>
        </div>
      )}
    </Draggable >
  )
}