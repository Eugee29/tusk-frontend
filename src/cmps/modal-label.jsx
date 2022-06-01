import React, { useEffect, useState, useRef, useParam } from 'react'
import { socketService } from '../services/socket.service.js'
import { useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { setModal } from '../store/app/app.actions'
import { useParams } from 'react-router-dom'

import { BsCheck2 } from 'react-icons/bs'
import { BsPencil } from 'react-icons/bs'

export const ModalLabel = ({ task, board, onUpdateBoard, changeEditLabel, updateTask, element }) => {

  const { groupId, taskId } = useParams()
  const [labelName, setLabelName] = useState('')
  const [searchLabel, setSearchLabel] = useState('')
  const [taskLabels, setTaskLabels] = useState(task.labelIds)

  const modalRef = useRef()
  const searchInput = useRef(null)
  const firstLoad = useRef(false)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   // searchInput.current.focus();
  // }, [])

  if (!task) return
  if (!board) return

  const onToggle = (id) => {
    const updatedLabelList = [...taskLabels]
    const taskLabelIdx = updatedLabelList.findIndex(taskLabel => taskLabel === id)
    const boardLabelIdx = board.labels.findIndex(boardLabel => boardLabel.id === id)
    taskLabelIdx >= 0 ? updatedLabelList.splice(taskLabelIdx, 1) : updatedLabelList.push(board.labels[boardLabelIdx].id)

    console.log(updatedLabelList)

    setTaskLabels(updatedLabelList)
    updateTask({ ...task, labelIds: updatedLabelList })
    // socketService.emit('emit-any-change', 'Toggle label')
  }

  const handleChange = ({ target }) => {
    setSearchLabel(target.value)
    // setfilterMembers(updatedBoard.members.filter(member => member.fullName.toLowerCase().includes(target.value.toLowerCase())))
  }

  const onOpenModal = (category) => {
    dispatch(setModal({ element, category, title: category, task, updateTask, board, onUpdateBoard }))
  }

  return (
    <div className="label-section" ref={modalRef}>

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
                {taskLabels && taskLabels.some(taskLabel => taskLabel === label.id) && <span className='label-icon' ><BsCheck2 /></span>}
              </span>
              <span className='label-icon pencil' onClick={(ev) => { ev.stopPropagation(); onOpenModal('Change label'); changeEditLabel(label) }} ><BsPencil /></span>
            </li>
          ))}
        </ul>

        <span className="btn" ref={modalRef} onClick={(ev) => { ev.stopPropagation(); onOpenModal('Create label') }}>Create a new label</span>
        <div className="hr"></div>
      </div>

    </div>
  )

}

{/* <div className="label-box">
        <h3 className="label">Labels</h3>

        <ul >
          {board.labels.map((label, idx) => (
            <li key={label.id} >
              <span onClick={() => onToggle(label.id)} className="label-color" style={{ backgroundColor: label.color }}>
                <span className="label-txt" >{`${label.title}`}</span>
                {taskLabels && taskLabels.some(taskLabel => taskLabel === label.id) && <span className='label-icon' ><BsCheck2 /></span>}
              </span>
              <span className='label-icon pencil' onClick={(ev) => { ev.stopPropagation(); onModal('Change label'); changeEditLabel(label) }} ><BsPencil /></span>
            </li>
          ))}
        </ul>

        <span className="btn" ref={modalRef} onClick={(ev) => { ev.stopPropagation(); onModal('Create label') }}>Create a new label</span>
        <div className="hr"></div>
      </div> */}


// const onToggle = (id) => {
//    const taskLabelIdx = task.labelIds.findIndex(taskLabel => taskLabel === id)
//    const boardLabelIdx = board.labels.findIndex(boardLabel => boardLabel.id === id)
//    const updatedLabelsTask = taskLabelIdx >= 0
//       ? task.labelIds.splice(taskLabelIdx, 1)
//       : task.labelIds.push(board.labels[boardLabelIdx].id)
//    updateTask(task)
//    socketService.emit('emit-any-change', 'Toggle label')
// }