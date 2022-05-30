import React, { useEffect, useState, useRef } from 'react'

import { AiOutlineUser } from 'react-icons/ai'
import { BiLabel } from 'react-icons/bi'
import { BsCheck2Square } from 'react-icons/bs'
import { FiClock } from 'react-icons/fi'
import { GrAttachment } from 'react-icons/gr'
import { IoMdBrowsers } from 'react-icons/io'

import { Modal } from "./modal"

export function TaskDetailsSideTask({ task, board, updateTask, onUpdateBoard }) {

   const [modalName, setModalName] = useState('')

   const onOpenModalDynamic = (name) => {
      if (!name) setModalName('')
      if (name === modalName) setModalName('')
      else setModalName(name)
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

               <a className="sidebar-button" onClick={ () => onOpenModalDynamic('Members')} href="#" title="Members">
                  <span className="sidebar-icon"><AiOutlineUser /></span>
                  <span className="">Members</span>
               </a>

               <a className="sidebar-button" onClick={ () => onOpenModalDynamic('Labels')} href="#" title="Labels">
                  <span className="sidebar-icon"><BiLabel /></span>
                  <span className="">Labels</span>
               </a>

               <a className="sidebar-button" href="#" title="Checklist">
                  <span className="sidebar-icon"><BsCheck2Square /></span>
                  <span className="">Checklist</span></a>

               <a className="sidebar-button" href="#" title="Dates">
                  <span className="sidebar-icon"><FiClock /></span>
                  <span className="">Dates</span>
               </a>

               <a className="sidebar-button" href="#" title="Attachment">
                  <span className="sidebar-icon"><GrAttachment /></span>
                  <span className="">Attachment</span>
               </a>

               <a className="sidebar-button" onClick={ () => onOpenModalDynamic('Cover')}  href="#" title="Cover">
                  <span className="sidebar-icon"><IoMdBrowsers /></span>
                  <span className="">Cover</span>
               </a>

            </div>
         </div>

         {modalName && <Modal task={task} board={board} updateTask={updateTask} onUpdateBoard={onUpdateBoard} onOpenModalDynamic={onOpenModalDynamic} category={modalName}></Modal>}
   
      </section>

   )
}


