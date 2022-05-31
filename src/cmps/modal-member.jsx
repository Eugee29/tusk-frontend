import React, { useEffect, useState, useRef, useParam } from 'react'

import { socketService } from '../services/socket.service.js'
import { BsCheck2 } from 'react-icons/bs'

export const ModalMember = ({ task, board, updateTask }) => {

   const [searchMember, setSearchMember] = useState('')
   const [filterMembers, setfilterMembers] = useState(board.members)

   if (!task) return
   if (!board) return

   const initials = (member) => ([...member.fullName])
   const onToggle = (id) => {
      const taskMemberIdx = task.members.findIndex(taskMember => taskMember._id === id)
      const boardMemberIdx = board.members.findIndex(boardMember => boardMember._id === id)

      const updatedMembers = taskMemberIdx >= 0
         ? task.members.splice(taskMemberIdx, 1)
         : task.members.push(board.members[boardMemberIdx])
      updateTask(task)
      socketService.emit('emit-any-change', 'Toggle member')
   }

   const handleChange = ({ target }) => {
      setSearchMember(target.value)
      setfilterMembers(board.members.filter(member => member.fullName.toLowerCase().includes(target.value.toLowerCase())))
   }

   return (
      <div className="member-section">

         <div className="search-box">
            <input className="" type="text" placeholder="Search members" value={searchMember} onChange={handleChange} />
         </div>

         <div className="members-box">
            <h3 className="label">Board members</h3>
            <ul className="">
               {filterMembers && filterMembers?.map((member, idx) => (
                  member?.imgURL

                     ? <li key={member._id} onClick={() => onToggle(member._id)}>
                        <a className='member-list'>
                           <span className="member-img" style={{ backgroundImage: `url('${member.imgURL}')` }}></span>
                           <span className="member-txt" >{`${member.fullName} (${member.username})`}</span>
                           {task?.members && task.members.some(taskMember => taskMember._id === member._id) && <span className='member-icon' ><BsCheck2 /></span>}
                        </a>
                     </li>

                     : <li key={member._id}>
                        <a className='member-list'>
                           <span className="member" >{`${initials(member)[0]}${initials(member)[1]}`}</span>
                           <span className="member-txt" >{`${member.fullName} (${member.username})`}</span>
                           {task?.members && task.members.some(taskMember => taskMember._id === member._id) && <span className='member-icon' ><BsCheck2 /></span>}
                        </a>
                     </li>
               ))}
            </ul>
         </div>
      </div>
   )

}