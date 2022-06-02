import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useNavigate } from 'react-router-dom'

import { utilService } from '../../services/util.service'

import { FiClock } from 'react-icons/fi'
import { RiPencilLine } from 'react-icons/ri'
import { MdOutlineSubject } from 'react-icons/md'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { ImAttachment } from 'react-icons/im'

import { LabelList } from './label-list'

export const TaskPreview = ({ task, groupId, index, board, toggleLabels, isLabelsOpen }) => {
   const navigate = useNavigate()
   const onOpenDetails = (ev) => {
      ev.stopPropagation()
      navigate(`${groupId}/${task.id}`)
   }

   const getTaskStyle = () => {
      if (task.style) {
         if (task.style.imgURL && task.style.isCover) {
            return { backgroundImage: `url(${task.style.imgURL})` }
         }
         if (task.style.bgColor) {
            if (!task.style.isCover) {
               return { borderTop: `32px solid ${task.style.bgColor}` }
            } else {
               return { backgroundColor: `${task.style.bgColor}` }
            }
         }

      } else return ''
   }

   const getTaskClass = () => {
      if (task.style) {
         if (task.style.bgColor && task.style.isCover) {
            return 'task-preview styled'
         } else if (task.style.bgColor && !task.style.isCover) {
            return 'task-preview color-header'
         } else if (task.style.imgURL && task.style.isCover) {
            return 'task-preview styled img'
         } else if (task.style.imgURL && !task.style.isCover) {
            return 'task-preview img-header'
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

   const getTimeStyle = () => {
      var dateFormat = utilService.getDateTimeFormat(task.dueDate)
      if (task?.isComplete && task.isComplete) {
         dateFormat.statusDate = 'complete'
      }

      if (dateFormat.statusDate === '') return { backgroundColor: '', color: '#505f79' }
      if (dateFormat.statusDate === 'overdue') return { backgroundColor: '#EB5A46', color: '#ffff' }
      if (dateFormat.statusDate === 'duesoon') return { backgroundColor: '#F2D600', color: '#ffff' }
      if (dateFormat.statusDate === 'complete') return { backgroundColor: '#61BD4F', color: '#ffff' }

   }

   return (
      <Draggable draggableId={task.id} index={index} type='TASK' >
         {(provided, snapshot) => (
            <div className='task-preview-handle' {...provided.draggableProps} {...provided.dragHandleProps}>
               <section className={`${getTaskClass()} ${snapshot.isDragging && !snapshot.isDropAnimating ? 'tilted' : ''}`} onClick={onOpenDetails} ref={provided.innerRef} style={getTaskStyle()}  >
                  {!task.style.isCover && task.style.imgURL && <img className='task-img-container' src={task.style.imgURL} alt="..." />}
                  <div className='task-info'>
                     {!!task.labelIds.length && (!task.style.isCover) && <LabelList board={board} labelIds={task.labelIds} toggleLabels={toggleLabels} isLabelsOpen={isLabelsOpen} />}

                     <div className='task-title-container'>
                        <h2 className='task-title'> {task.title} </h2>
                     </div>

                     <div className='task-icon-container'>
                        <div className='icon-container'>
                           {task.dueDate && (!task.style.isCover)
                              && <div className='icon-time-container' style={getTimeStyle()}>
                                 <FiClock /> <span> {utilService.formatTimeToDM(task.dueDate)} </span>
                              </div>
                           }
                           {task.description && (!task.style.bgColor) && (!task.style.imgURL)
                              && <MdOutlineSubject />}
                           {task.checklists && !!task.checklists.length && (!task.style.isCover)
                              && <div className='icon-num-container'> <IoMdCheckboxOutline /> <span> {getChecklistLength()} </span> </div>}
                           {task.attachments && !!task.attachments.length && (!task.style.isCover)
                              && <div className='icon-num-container'><ImAttachment className='attachment-icon' /> <span> {task.attachments.length} </span> </div>}
                        </div>
                        {task.members && !!task.members.length && (!task.style.isCover)
                           && <div className='member-img-container'>
                              {task.members.map((member) => <a key={member._id} className="member-img"> <img src={member.imgURL} alt="" /> </a>)}
                           </div>}
                     </div>

                  </div>
                  <button className='edit-btn'> <RiPencilLine className='btn-icon' /> </button>
               </section>
            </div>
         )}
      </Draggable >
   )
}