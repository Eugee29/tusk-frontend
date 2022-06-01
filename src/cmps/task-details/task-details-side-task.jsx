import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from '../../store/app/app.actions'

import { AiOutlineUser } from 'react-icons/ai'
import { BiLabel } from 'react-icons/bi'
import { BsCheck2Square } from 'react-icons/bs'
import { FiClock } from 'react-icons/fi'
import { GrAttachment } from 'react-icons/gr'
import { IoMdBrowsers } from 'react-icons/io'


export function TaskDetailsSideTask({ task, board, updateTask, onUpdateBoard }) {

  const membersRef = useRef()
  const labelsRef = useRef()
  const checklistRef = useRef()
  const datesRef = useRef()
  const attachmentRef = useRef()
  const coverRef = useRef()

  const dispatch = useDispatch()


  const onOpenModal = (e, modal) => {
    e.stopPropagation()
    dispatch(setModal(modal))
  }

  return (
    <section className="side-task">

      <h3 className="label-header">Suggested</h3>

      <div className="join-container">
        <a className="sidebar-button" /*onClick={onJoinMember}*/ href="#" title="Join">
          <span className="sidebar-icon"><AiOutlineUser /></span>
          <span className="">Join</span>
        </a>
      </div>

      <div className="">
        <h3 className="label-header">Add to card</h3>

        <div className="">

          <a className="sidebar-button" ref={membersRef} onClick={(e) => onOpenModal(e, { element: membersRef.current, category: 'Members', title: 'Members', task, updateTask, board, onUpdateBoard })} title="Members">
            <span className="sidebar-icon"><AiOutlineUser /></span>
            <span className="">Members</span>
          </a>

          <a className="sidebar-button" ref={labelsRef} onClick={(e) => onOpenModal(e, { element: labelsRef.current, category: 'Labels', title: 'Labels', task, updateTask, board, onUpdateBoard })} title="Labels">
            <span className="sidebar-icon"><BiLabel /></span>
            <span className="">Labels</span>
          </a>

          <a className="sidebar-button" ref={checklistRef} onClick={(e) => onOpenModal(e, { element: checklistRef.current, title: 'Add checklist', category: 'checklist-add', props: { updateTask, task } })} title='Checklist'>
            <span className="sidebar-icon"><BsCheck2Square /></span>
            <span className="">Checklist</span></a>

          <a className="sidebar-button" ref={datesRef} onClick={(e) => onOpenModal(e, { element: datesRef.current, category: 'Dates', title: 'Dates', task, updateTask, board, onUpdateBoard })} title="Dates">
            <span className="sidebar-icon"><FiClock /></span>
            <span className="">Dates</span>
          </a>

          <a className="sidebar-button" ref={attachmentRef} onClick={(e) => onOpenModal(e, { element: attachmentRef.current, category: 'Attachment', title: 'Attachment', task, updateTask, board, onUpdateBoard })} title="Attachment">
            <span className="sidebar-icon"><GrAttachment /></span>
            <span className="">Attachment</span>
          </a>

          <a className="sidebar-button" ref={coverRef} onClick={(e) => onOpenModal(e, { element: coverRef.current, category: 'Cover', title: 'Cover', task, updateTask, board, onUpdateBoard })} title="Cover">
            <span className="sidebar-icon"><IoMdBrowsers /></span>
            <span className="">Cover</span>
          </a>

        </div>
      </div>


    </section>

  )
}


