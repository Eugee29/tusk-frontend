import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { updateBoard } from '../store/board/board.action.js'

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'

import { Modal } from "./modal"

function _TaskDetailsInfo({ task }) {

   const dispatch = useDispatch()

   const { board } = useSelector((storeState) => storeState.boardModule)

   const [isOpenMember, setIsOpenMember] = useState(false)
   const [isOpenLabel, setIsOpenLabel] = useState(false)
   const [isOpenLabelCreate, setIsOpenLabelCreate] = useState(false)
   const [isOpenLabelChange, setIsOpenLabelChange] = useState(false)
   const [isCompleteDate, setIsCompleteDate] = useState(false)
   const [editLabel, seteditLabel] = useState('')

   useEffect(() => {
      onLabels()
   }, [])

   const onToggle = async (board) => {
      const updatedBoard = await dispatch(updateBoard(board))
      console.log('onToggle', updatedBoard);
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

   const initials = (member) => ([...member.fullName])

   const onLabels = (label) => { return board.labels.filter(boardLabel => boardLabel.id === label)[0] }

   const month = new Intl.DateTimeFormat('en', { month: 'short' })
   const day = new Intl.DateTimeFormat('en', { day: '2-digit' })
   const time = new Intl.DateTimeFormat('he', { hour: 'numeric', minute: 'numeric' })
   const displayDate = `${day.format(task.dueDate)} ${month.format(task.dueDate)} at ${time.format(task.dueDate)}`
   const now = new Date()
   const statusDate = task.dueDate > now.setHours(23, 59, 59, 59) ? '' :
      (task.dueDate <= now.setHours(23, 59, 59, 59) && task.dueDate >= now ? 'duesoon' : 'overdue')

   // console.log('statusDate', statusDate)
   // console.log('task.dueDate', task.dueDate)
   // console.log('statusDatess', Date.now())
   // console.log('statusDatess', now.setHours(23, 59, 59, 59))

   
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
            <a className="members-add-button round " onClick={onOpenModalMember}><span >+</span></a>
         </div>

         {/* Labels */}
         <div className="task-card-info">
            <h3 className="task-member-title">Labels</h3>
            {task.labelIds.map(label =>
               <a key={label} className="label" style={{ backgroundColor: `${onLabels(label).color}` }}><span>{onLabels(label).title}</span></a>)}
            <a className="members-add-button " onClick={onOpenModalLabel}><span >+</span></a>
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
                     <span className="arrow-date">
                        <span className="arrow-sub-date" role="img" aria-label="DownIcon">
                           <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor">
                              </path>
                           </svg>
                        </span>
                     </span>
                  </button>
               </div>
            </div>
         </div>

         {isOpenMember && board && <Modal task={task} board={board} onCloseModal={onCloseModal} onToggleMember={onToggle} category={'Members'}></Modal>}
         {isOpenLabel && board && <Modal task={task} board={board} onCloseModal={onCloseModal}  onToggleLabel={onToggle} onChangeLabel={onChangeLabel} onCreatelLabel={onCreatelLabel} onCloseModalLabel={onOpenModalLabel} category={'Labels'}></Modal>}
         {isOpenLabelCreate && board && <Modal task={task} board={board} onCloseModal={onCloseModal} onLabelCreate={onToggle}  onBackTolabel={onBackTolabel} onCloseModalLabel={onOpenModalLabel} category={'Create label'}></Modal>}
         {isOpenLabelChange && board && <Modal task={task} editLabel={editLabel} board={board} onCloseModal={onCloseModal} onLabelCreate={onToggle}  onBackTolabel={onBackTolabel} onCloseModalLabel={onOpenModalLabel} category={'Change label'}></Modal>}

      </section>
   )
}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const TaskDetailsInfo = connect(mapStateToProps)(_TaskDetailsInfo)