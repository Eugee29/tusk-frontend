import React, { useEffect, useState, useRef, useParam } from 'react'
import { useParams } from 'react-router-dom'

import { BsCheck2 } from 'react-icons/bs'
import { BsPencil } from 'react-icons/bs'
import { Modal } from "./modal"

export const ModalLabel = ({ task, board, onToggleLabel, onCloseModalLabel, onCreatelLabel, onChangeLabel }) => {

   const { groupId, taskId } = useParams()

   const [labelName, setLabelName] = useState('')
   const [searchLabel, setSearchLabel] = useState('')

   const [updatedBoard, setupdatedBoard] = useState(board)
   const [updatedLabels, setupdatedLabels] = useState(board.labels)

   const [searchMember, setSearchMember] = useState('')
   const [filterMembers, setfilterMembers] = useState(updatedBoard.members)

   const searchInput = useRef(null);
   const firstLoad = useRef(false)

   useEffect(() => {
      if (!firstLoad.current) firstLoad.current = true
      else onToggleLabel(updatedBoard)
   }, [updatedBoard])

   useEffect(() => {
      // searchInput.current.focus();
   }, [])

   if (!task) return
   if (!board) return

   const onToggle = (id) => {
      const taskLabelIdx = task.labelIds.findIndex(taskLabel => taskLabel === id)
      const boardLabelIdx = board.labels.findIndex(boardLabel=> boardLabel.id === id)
      const groupIdx = board.groups.findIndex(group => group.id === groupId)
      const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)

      console.log('taskLabelIdx', taskLabelIdx);

      const updatedLabelsTask = taskLabelIdx >= 0
         ? task.labelIds.splice(taskLabelIdx, 1)
         : task.labelIds.push(board.labels[boardLabelIdx].id)
      setupdatedLabels(task)

      const updatedGroups = board.groups[groupIdx].tasks[taskIdx] = task

      setupdatedBoard({ ...updatedBoard, groups: board.groups })
   }

   const onCreateLabel = () => {
      onCreatelLabel()
      onCloseModalLabel()
   }

   const onMoveToChangeLabel = (editLabel) => {
      onChangeLabel(editLabel)
      onCloseModalLabel()
   }

   const handleChange = ({ target }) => {
      setSearchLabel(target.value)
      // setfilterMembers(updatedBoard.members.filter(member => member.fullName.toLowerCase().includes(target.value.toLowerCase())))
   }

   return (
      <div className="label-section">

         <div className="search-box">
            <input ref={searchInput} type="text" name='search' placeholder="Search label..." value={searchLabel} onChange={handleChange} />
         </div>

         <div className="label-box">
            <h3 className="label">Labels</h3>

            <ul >
               {board.labels.map((label, idx) => (
                  <li key={label.id} >
                     <span onClick={() => onToggle(label.id)} className="label-color" style={{ backgroundColor: label.color }}>
                        <span className="label-txt" >{`${label.title}`}</span>
                        {task?.labelIds && task.labelIds.some(taskLabel => taskLabel === label.id) && <span className='label-icon' ><BsCheck2 /></span>}
                     </span>
                     <span className='label-icon pencil' onClick={ () => onMoveToChangeLabel(label)}><BsPencil /></span>
                  </li>
               ))}
            </ul>

            <span className="btn" onClick={onCreateLabel}>Create a new label</span>
            <div className="hr"></div>
         </div>



      </div>
   )

}

