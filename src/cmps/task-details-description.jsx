import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector } from 'react-redux'

import { GrTextAlignFull } from 'react-icons/gr'

function _TaskDetailsDescription({ task }) {

   const { board } = useSelector((storeState) => storeState.boardModule)

   return (
      <section className="task-details-description" >

         {/* Description */}
         {/* {task.description} */}

         <div className="description-title-container">
            <span className=""><GrTextAlignFull /></span>
            <h3 >Description</h3>
         </div>







      </section>
   )
}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const TaskDetailsDescription = connect(mapStateToProps)(_TaskDetailsDescription)