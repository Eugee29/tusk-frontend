import React, { useEffect, useState, useRef, useParam } from 'react'
import { socketService } from '../services/socket.service.js'
import { useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { setModal } from '../store/app/app.actions'
import { useParams } from 'react-router-dom'

import { BsCheck2 } from 'react-icons/bs'
import { BsPencil } from 'react-icons/bs'

export const ModalLabel = ({ task, board, onUpdateBoard, changeEditLabel, updateTask }) => {

  const { groupId, taskId } = useParams()
  const [labelName, setLabelName] = useState('')
  const [searchLabel, setSearchLabel] = useState('')

  const buttonRef = useRef()
  const searchInput = useRef(null)
  const firstLoad = useRef(false)

  const dispatch = useDispatch()

  useEffect(() => {
    // searchInput.current.focus();
  }, [])

  if (!task) return
  if (!board) return

  const onToggle = (id) => {
    const taskLabelIdx = task.labelIds.findIndex(taskLabel => taskLabel === id)
    const boardLabelIdx = board.labels.findIndex(boardLabel => boardLabel.id === id)
    const updatedLabelsTask = taskLabelIdx >= 0
      ? task.labelIds.splice(taskLabelIdx, 1)
      : task.labelIds.push(board.labels[boardLabelIdx].id)
    updateTask(task)
    socketService.emit('emit-any-change', 'Toggle label')
  }

  const handleChange = ({ target }) => {
    setSearchLabel(target.value)
    // setfilterMembers(updatedBoard.members.filter(member => member.fullName.toLowerCase().includes(target.value.toLowerCase())))
  }

  const onModal = (category) => {
    dispatch(setModal({ category, title: category, task, board, onUpdateBoard, position: utilService.getPosition(buttonRef.current) }))
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
              <span className='label-icon pencil' ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Change label'); changeEditLabel(label) }} ><BsPencil /></span>
            </li>
          ))}
        </ul>

        <span className="btn" ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Create label') }}>Create a new label</span>
        <div className="hr"></div>
      </div>



    </div>
  )

}

