import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { updateBoard } from '../store/board/board.action.js'

import { AiOutlineUser } from 'react-icons/ai'
import { BiLabel } from 'react-icons/bi'
import { BsCheck2Square } from 'react-icons/bs'
import { FiClock } from 'react-icons/fi'
import { GrAttachment } from 'react-icons/gr'
import { IoMdBrowsers } from 'react-icons/io'

import { Modal } from "./modal"

function _TaskDetailsSideTask({ task }) {

   const dispatch = useDispatch()

   const [isOpen, setIsOpen] = useState(false)

   const onOpenModal = () => {
      setIsOpen(!isOpen)
   }
   
   const onCloseModal = () => {
      setIsOpen(false)
   }

   // const joinMember = async (board) => {
   //    const updatedBoard = await dispatch(updateBoard(board))
   //    console.log('onToggle', updatedBoard);
   // }

   const onJoinMember = () => {
      
      // const taskMemberIdx = task.members.findIndex(taskMember => taskMember._id === id)
      // const boardMemberIdx = board.members.findIndex(boardMember => boardMember._id === id)
      // const groupIdx = board.groups.findIndex(group => group.id === groupId)
      // const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)

      // const updatedMembers = taskMemberIdx >= 0
      //    ? task.members.splice(taskMemberIdx, 1)
      //    : task.members.push(board.members[boardMemberIdx])
      // setupdatedTask(task)

      // const updatedGroups = board.groups[groupIdx].tasks[taskIdx] = updatedTask
      // setupdatedBoard({ ...updatedBoard, groups: board.groups })


   }

   // const [updatedBoard, setupdatedBoard] = useState(board)
   // const [updatedTask, setupdatedTask] = useState(task)
   // const [searchMember, setSearchMember] = useState('')
   // const [filterMembers, setfilterMembers] = useState(updatedBoard.members)

   // useEffect(() => {
   //    if (!firstLoad.current) firstLoad.current = true
   //    else onToggleMember(updatedBoard)
   // }, [updatedBoard])

   // if (!task) return
   // if (!board) return

   // const initials = (member) => ([...member.fullName])

   // const onToggle = (id) => {
   //    const taskMemberIdx = task.members.findIndex(taskMember => taskMember._id === id)
   //    const boardMemberIdx = board.members.findIndex(boardMember => boardMember._id === id)
   //    const groupIdx = board.groups.findIndex(group => group.id === groupId)
   //    const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)

   //    const updatedMembers = taskMemberIdx >= 0
   //       ? task.members.splice(taskMemberIdx, 1)
   //       : task.members.push(board.members[boardMemberIdx])
   //    setupdatedTask(task)

   //    const updatedGroups = board.groups[groupIdx].tasks[taskIdx] = updatedTask
   //    setupdatedBoard({ ...updatedBoard, groups: board.groups })
   // }

   return (
      <section className="side-task">

         <h3 className="label-header">Suggested</h3>

         <div className="join-container">
            <a className="sidebar-button" onClick={onJoinMember} href="#" title="Join">
               <span className="sidebar-icon"><AiOutlineUser /></span>
               <span className="">Join</span>
            </a>
         </div>

         <div className="">
            <h3 className="label-header">Add to card</h3>

            <div className="">

               <a className="sidebar-button" href="#" title="Members">
                  <span className="sidebar-icon"><AiOutlineUser /></span>
                  <span className="">Members</span>
               </a>

               <a className="sidebar-button" href="#" title="Labels">
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

               <a className="sidebar-button" onClick={onOpenModal} href="#" title="Cover">
                  <span className="sidebar-icon"><IoMdBrowsers /></span>
                  <span className="">Cover</span>
               </a>

            </div>
         </div>

         {isOpen && task && <Modal task={task} onCloseModal={onCloseModal} category={'Cover'}></Modal>}

      </section>

   )
}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const TaskDetailsSideTask = connect(mapStateToProps)(_TaskDetailsSideTask)


