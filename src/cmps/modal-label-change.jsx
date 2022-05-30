import React, { useEffect, useState, useRef, useParam } from 'react'
import { useParams } from 'react-router-dom'

// import { BsCheck2 } from 'react-icons/bs'

export const ModalLabelChange = ({ task, board, editLabel, onLabelCreate, onBackTolabel }) => {

   const { groupId, taskId } = useParams()

   const [labelName, setLabelName] = useState(editLabel.title)
   const [color, setcolor] = useState(editLabel.color)

   const [updatedBoard, setupdatedBoard] = useState(board)
   const searchInput = useRef(null);
   const firstLoad = useRef(false)

   useEffect(() => {
      console.log('editLabel', editLabel);
      searchInput.current.focus();
   }, [])

   useEffect(() => {
      if (!firstLoad.current) firstLoad.current = true
      else onLabelCreate(updatedBoard)
   }, [updatedBoard])

   if (!task) return
   if (!board) return

   const onToggle = (ev) => {
      ev.preventDefault()
      const boardLabelIdx = board.labels.findIndex(boardLabel=> boardLabel.id === editLabel.id)
      board.labels[boardLabelIdx] = { id: editLabel.id, title: labelName, color: color }
      setupdatedBoard(board)
      onBackTolabel()
   }

   const onDelete = (ev) => {
      ev.preventDefault()
      const boardLabelIdx = board.labels.findIndex(boardLabel=> boardLabel.id === editLabel.id)
      board.labels.splice(boardLabelIdx, 1)
      console.log(board.labels);
      setupdatedBoard(board)
      onBackTolabel()
   }

   const onPickColor = (color) => {
      setcolor(color)
   }

   const handleChange = ({ target }) => {
      setLabelName(target.value)
      // setfilterMembers(updatedBoard.members.filter(member => member.fullName.toLowerCase().includes(target.value.toLowerCase())))
   }
   console.log('board', board);

   return (
      <div className="change-section">

         <div className="change-box">
            <h3 className="label">Name</h3>
            <input ref={searchInput} type="text" name='search' value={labelName} onChange={handleChange} />
         </div>

         <div className="change-box">
            <h3 className="label">Select a color</h3>

            <div className="colors-section">
               <div className="box-container">

                  <button onClick={() => { onPickColor('#61bd4f') }} style={{ backgroundColor: `#61bd4f` }}></button>
                  <button onClick={() => { onPickColor('#f2d600') }} style={{ backgroundColor: `#f2d600` }}></button>
                  <button onClick={() => { onPickColor('#ff9f1a') }} style={{ backgroundColor: `#ff9f1a` }}></button>
                  <button onClick={() => { onPickColor('#EB5A44') }} style={{ backgroundColor: `#EB5A44` }}></button>
                  <button onClick={() => { onPickColor('#c377e0') }} style={{ backgroundColor: `#c377e0` }}></button>
                  <button onClick={() => { onPickColor('#0079bf') }} style={{ backgroundColor: `#0079bf` }}></button>
                  <button onClick={() => { onPickColor('#00c2e0') }} style={{ backgroundColor: `#00c2e0` }}></button>
                  <button onClick={() => { onPickColor('#51e898') }} style={{ backgroundColor: `#51e898` }}></button>
                  <button onClick={() => { onPickColor('#ff78cb') }} style={{ backgroundColor: `#ff78cb` }}></button>
                  <button onClick={() => { onPickColor('#344563') }} style={{ backgroundColor: `#344563` }}></button>
               </div>
            </div>

            <button onClick={onToggle}>Save</button>
            <button /*onClick={onDelete}*/ className="delete" >Delete</button>
         </div>

      </div>
   )

}