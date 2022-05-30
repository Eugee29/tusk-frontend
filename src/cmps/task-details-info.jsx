import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { updateBoard } from '../store/board/board.action.js'

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { GrDown } from 'react-icons/gr'

import { Modal } from "./modal"

export const TaskDetailsInfo = ({ task, updateTask, board, onUpdateBoard }) => {

   const [isOpenMember, setIsOpenMember] = useState(false)
   const [isOpenLabel, setIsOpenLabel] = useState(false)
   const [isOpenLabelCreate, setIsOpenLabelCreate] = useState(false)
   const [isOpenLabelChange, setIsOpenLabelChange] = useState(false)
   const [isCompleteDate, setIsCompleteDate] = useState(false)
   const [editLabel, seteditLabel] = useState('')
   const [isOpen, setIsOpen] = useState(false)

   const [modalName, setModalName] = useState('')

   useEffect(() => {
      onLabels()
   }, [])

   const onToggle = async (board) => {
      // const updatedBoard = await dispatch(updateBoard(board))
      // console.log('onToggle', updatedBoard)
   }

   const onToggleComplete = (value, ev) => {
      setIsCompleteDate(value)
   }

   const onOpenModalMember = () => {
      setIsOpenMember(!isOpenMember)
   }

   const onOpenModalLabel = () => {
      setIsOpenLabel(!isOpenLabel)
   }

   const onCreatelLabel = () => {
      setIsOpenLabelCreate(!isOpenLabelCreate)
      setIsOpenLabelChange(false)
   }

   const onChangeLabel = (label) => {
      seteditLabel(label)
      setIsOpenLabelChange(!isOpenLabelChange)
      setIsOpenLabelCreate(false)
   }

   const onBackTolabel = () => {
      setIsOpenLabelCreate(false)
      setIsOpenLabelChange(false)
      setIsOpenLabel(true)
   }

   const onCloseModal = () => {
      setIsOpenMember(false)
      setIsOpenLabel(false)
      setIsOpenLabelCreate(false)
      setIsOpenLabelChange(false)
   }

   const onOpenModal = () => {
      setIsOpen(!isOpen)
   }

   const onOpenModalDynamic = (name) => {
      if (!name) setModalName('')
      if (name === modalName) setModalName('')
      else setModalName(name)
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
            <a className="members-add-button round " /*onClick={onOpenModalMember}*/ onClick={() => onOpenModalDynamic('Members')} ><span >+</span></a>
         </div>

         {/* Labels */}
         <div className="task-card-info">
            <h3 className="task-member-title">Labels</h3>
            {task.labelIds.map(label =>
               <a key={label} className="label" /*onClick={onOpenModalLabel}*/ onClick={() => onOpenModalDynamic('Labels')} style={{ backgroundColor: `${onLabels(label).color}` }}><span>{onLabels(label).title}</span></a>)}
            <a className="members-add-button " /*onClick={onOpenModalLabel}*/ onClick={() => onOpenModalDynamic('Labels')} ><span >+</span></a>
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

         {modalName && board && <Modal task={task} editLabel={editLabel} updateTask={updateTask} onOpenModalDynamic={onOpenModalDynamic} onUpdateBoard={onUpdateBoard} board={board} onCloseModal={onCloseModal} onLabelCreate={onToggle} onBackTolabel={onBackTolabel} onCloseModalLabel={onOpenModalLabel} category={modalName}></Modal>}

      </section >
   )
}
