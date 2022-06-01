import React, { useEffect, useState, useRef, useParam } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { setModal } from '../store/app/app.actions'

// import { BsCheck2 } from 'react-icons/bs'
// import { Modal } from "./modal"

export const ModalLabelCreate = ({ task, board, onUpdateBoard, updateTask }) => {

  const [labelName, setLabelName] = useState('')
  const [color, setcolor] = useState('')
  const [updatedBoard, setupdatedBoard] = useState(board)
  const searchInput = useRef(null)
  const firstLoad = useRef(false)
  const buttonRef = useRef()

  const dispatch = useDispatch()

  useEffect(() => {
    // searchInput.current.focus();
  }, [])

  useEffect(() => {
    if (!firstLoad.current) firstLoad.current = true
    else onUpdateBoard(updatedBoard)
  }, [updatedBoard])

  if (!task) return
  if (!board) return

  const onToggle = () => {
    board.labels.push({ id: makeid(3), title: labelName, color: color })
    setupdatedBoard(board)
    onOpenModal('Labels')
  }

  const onPickColor = (color) => {
    setcolor(color)
  }

  const handleChange = ({ target }) => {
    setLabelName(target.value)
    // setfilterMembers(updatedBoard.members.filter(member => member.fullName.toLowerCase().includes(target.value.toLowerCase())))
  }

  const onOpenModal = (category) => {
    dispatch(setModal({ element: buttonRef.current, category, title: category, task, updateTask, board, onUpdateBoard }))
  }

  console.log('board', board)

  return (
    <div className="create-section">

      <div className="search-box">
        <h3 className="label">Name</h3>
        <input ref={searchInput} type="text" name='search' value={labelName} onChange={handleChange} />
      </div>

      <div className="create-box">
        <h3 className="label">Select a color</h3>

        <div className="colors-section">
          <div className="box-container">

            <button onClick={() => { onPickColor('#7BC86C') }} style={{ backgroundColor: `#7BC86C` }}></button>
            <button onClick={() => { onPickColor('#F5DD29') }} style={{ backgroundColor: `#F5DD29` }}></button>
            <button onClick={() => { onPickColor('#FFAF3F') }} style={{ backgroundColor: `#FFAF3F` }}></button>
            <button onClick={() => { onPickColor('#EF7564') }} style={{ backgroundColor: `#EF7564` }}></button>
            <button onClick={() => { onPickColor('#CD8DE5') }} style={{ backgroundColor: `#CD8DE5` }}></button>
            <button onClick={() => { onPickColor('#5BA4CF') }} style={{ backgroundColor: `#5BA4CF` }}></button>
            <button onClick={() => { onPickColor('#29CCE5') }} style={{ backgroundColor: `#29CCE5` }}></button>
            <button onClick={() => { onPickColor('#6DECA9') }} style={{ backgroundColor: `#6DECA9` }}></button>
            <button onClick={() => { onPickColor('#FF8ED4') }} style={{ backgroundColor: `#FF8ED4` }}></button>
            <button onClick={() => { onPickColor('#172B4D') }} style={{ backgroundColor: `#172B4D` }}></button>
          </div>
        </div>

        <button onClick={onToggle}>Create</button>
      </div>
    </div>
  )
}

function makeid(length) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength))
  }
  return result
}