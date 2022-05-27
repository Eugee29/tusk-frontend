import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector } from 'react-redux'

import { GrTextAlignFull } from 'react-icons/gr'

function _TaskDetailsDescription({ task, isCloseEdit }) {

   // const { board } = useSelector((storeState) => storeState.boardModule)

   const [isClickedDescription, setIsClickedDescription] = useState(null)
   const [description, setIsDescription] = useState(task.description)

   useEffect(() => {
      setIsClickedDescription(false)
   }, [isCloseEdit])

   const onChangeDescription = (ev) => {
      ev.stopPropagation()
      setIsClickedDescription(true)
      console.log(isClickedDescription);
   }

   const handleChange = (ev) => {
      ev.stopPropagation()
      setIsDescription(ev.target.value)
      console.log(ev.target.value);
   }

   return (
      <section className="task-details-description" >

         {/* Description */}
         <div className="description-title-container">
            <span className=""><GrTextAlignFull /></span>
            <h3 >Description</h3>
         </div>

         <p className="description-body-container">
            {!isClickedDescription && !task.description && <a onClick={onChangeDescription}>Add a more detailed description…</a>}
            {!isClickedDescription && task.description && <a onClick={onChangeDescription}>{task.description}</a>}
            {isClickedDescription && !task.description && <textarea onClick={onChangeDescription} onChange={handleChange} value={description}  placeholder="Add a more detailed description…" data-autosize="true" > </textarea>}
            {isClickedDescription && task.description && <textarea onClick={onChangeDescription} onChange={handleChange} value={description} data-autosize="true"></textarea>}
         </p>

      </section>
   )
}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const TaskDetailsDescription = connect(mapStateToProps)(_TaskDetailsDescription)