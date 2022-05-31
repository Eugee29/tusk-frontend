import React, { useEffect, useState, useRef, useParam } from 'react'

import { BsCheck2 } from 'react-icons/bs'

export const ModalMember = ({ task, board, updateTask }) => {

  // const [members,setMembers] = useState()
  const [searchMember, setSearchMember] = useState('')
  const [filterMembers, setfilterMembers] = useState(board.members)
  const [taskMembers, setTaskMembers] = useState(task.members)

  if (!task) return
  if (!board) return

  const initials = (member) => ([...member.fullName])
  const onToggle = (id) => {
    const taskMemberIdx = taskMembers.findIndex(taskMember => taskMember._id === id)
    const boardMemberIdx = board.members.findIndex(boardMember => boardMember._id === id)

    const updatedTaskMembers = [...taskMembers]

    const updatedMembers = taskMemberIdx >= 0
      ? updatedTaskMembers.splice(taskMemberIdx, 1)
      : updatedTaskMembers.push(board.members[boardMemberIdx])

    setTaskMembers(updatedTaskMembers)
    updateTask({ ...task, members: updatedTaskMembers })
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
                  {task?.members && taskMembers.some(taskMember => taskMember._id === member._id) && <span className='member-icon' ><BsCheck2 /></span>}
                </a>
              </li>

              : <li key={member._id}>
                <a className='member-list'>
                  <span className="member" >{`${initials(member)[0]}${initials(member)[1]}`}</span>
                  <span className="member-txt" >{`${member.fullName} (${member.username})`}</span>
                  {task?.members && taskMembers.some(taskMember => taskMember._id === member._id) && <span className='member-icon' ><BsCheck2 /></span>}
                </a>
              </li>
          ))}
        </ul>
      </div>
    </div>
  )

}