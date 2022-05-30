import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { setModal } from '../store/app/app.actions'

import { AiOutlineUser } from 'react-icons/ai'
import { BiLabel } from 'react-icons/bi'
import { BsCheck2Square } from 'react-icons/bs'
import { FiClock } from 'react-icons/fi'
import { GrAttachment } from 'react-icons/gr'
import { IoMdBrowsers } from 'react-icons/io'

// import { Modal } from "./modal"

export function TaskDetailsSideTask({ task, board, updateTask, onUpdateBoard }) {

   const buttonRef = useRef()
   const dispatch = useDispatch()

   const onModal = (category) => {
      dispatch(setModal({ category, title: category, task, updateTask, board, onUpdateBoard, position: utilService.getPosition(buttonRef.current) }))
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

               <a className="sidebar-button" ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Members') }} href="#" title="Members">
                  <span className="sidebar-icon"><AiOutlineUser /></span>
                  <span className="">Members</span>
               </a>

               <a className="sidebar-button" ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Labels') }}href="#" title="Labels">
                  <span className="sidebar-icon"><BiLabel /></span>
                  <span className="">Labels</span>
               </a>

               <a className="sidebar-button" ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Checklist') }} href="#" title="Checklist">
                  <span className="sidebar-icon"><BsCheck2Square /></span>
                  <span className="">Checklist</span></a>

               <a className="sidebar-button" ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Dates') }} href="#" title="Dates">
                  <span className="sidebar-icon"><FiClock /></span>
                  <span className="">Dates</span>
               </a>

               <a className="sidebar-button" ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Attachment') }} href="#" title="Attachment">
                  <span className="sidebar-icon"><GrAttachment /></span>
                  <span className="">Attachment</span>
               </a>

               <a className="sidebar-button" ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Cover') }} href="#" title="Cover">
                  <span className="sidebar-icon"><IoMdBrowsers /></span>
                  <span className="">Cover</span>
               </a>

            </div>
         </div>

         {/* {modalName && <Modal task={task} board={board} updateTask={updateTask} onUpdateBoard={onUpdateBoard} onOpenModalDynamic={onOpenModalDynamic} category={modalName}></Modal>} */}

      </section>

   )
}


