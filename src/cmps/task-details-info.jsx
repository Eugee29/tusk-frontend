import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { setModal } from '../store/app/app.actions'

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { GrDown } from 'react-icons/gr'

export const TaskDetailsInfo = ({ task, updateTask, board, onUpdateBoard }) => {

   const buttonRef = useRef()
   const dispatch = useDispatch()

   const [isCompleteDate, setIsCompleteDate] = useState(false)

   useEffect(() => {
      onLabels()
   }, [])

   const onToggleComplete = (value, ev) => {
      setIsCompleteDate(value)
   }

   const onModal = (category) => {
      dispatch(setModal({ category, title: category, task, updateTask, board, onUpdateBoard, position: utilService.getPosition(buttonRef.current) }))
   }

   const initials = (member) => ([...member.fullName])
   const onLabels = (label) => { return board.labels.filter(boardLabel => boardLabel.id === label)[0] }

   const month = new Intl.DateTimeFormat('en', { month: 'short' })
   const day = new Intl.DateTimeFormat('en', { day: '2-digit' })
   const time = new Intl.DateTimeFormat('he', { hour: 'numeric', minute: 'numeric' })
   const displayDate = `${day.format(task.dueDate)} ${month.format(task.dueDate)} at ${time.format(task.dueDate)}`
   const now = new Date()
   const statusDate = task.dueDate > now.setHours(23, 59, 59, 59) ? '' :
      (task.dueDate <= now.setHours(23, 59, 59, 59) && task.dueDate >= now ? 'duesoon' : 'overdue')
   return (
      <section className="task-details-info" >

         {/* Members */}
         <div className="task-card-info" >
            <h3 className="task-member-title">Members</h3>
            {task.members?.map((member, idx) => (
               member?.imgURL
                  ? <a key={member._id} className="member-img" style={{ backgroundImage: `url('${member.imgURL}')` }}> </a>
                  : <a key={member._id} className="member">{`${initials(member)[0]}${initials(member)[1]}`}</a>
            ))}
            <a className="members-add-button round" ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Members') }} ><span >+</span></a>
         </div>

         {/* Labels */}
         <div className="task-card-info">
            <h3 className="task-member-title">Labels</h3>
            {task.labelIds.map(label =>
               <a key={label} className="label" onClick={(ev) => { ev.stopPropagation(); onModal('Labels') }} style={{ backgroundColor: `${onLabels(label).color}` }}><span>{onLabels(label).title}</span></a>)}
            <a className="members-add-button " onClick={(ev) => { ev.stopPropagation(); onModal('Labels') }} ><span >+</span></a>
         </div>

         {/* Due date */}
         <div className="task-card-info">
            <h3 className="task-member-title">Due date</h3>
            <div className="date-container">
               <div className="date-complete-button">
                  {isCompleteDate
                     ? <ImCheckboxChecked onClick={() => onToggleComplete(false)} className='checkbox checked' />
                     : <ImCheckboxUnchecked onClick={() => onToggleComplete(true)} className='checkbox unchecked' />
                  }
               </div>
               <div className="date">
                  <button className="button-date" type="button">
                     <span className="dispaly-date">{displayDate}</span>
                     <span className={`status-date ${statusDate}`} >{statusDate}</span>
                     <span className="arrow-date">< GrDown /></span>
                  </button>
               </div>
            </div>
         </div>

      </section >
   )
}
