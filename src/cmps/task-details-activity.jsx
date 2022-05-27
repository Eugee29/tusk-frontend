import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector } from 'react-redux'

import { GrList } from 'react-icons/gr'

function _TaskDetailsActivity({ task }) {

   // const { board } = useSelector((storeState) => storeState.boardModule)

   return (
      <section className="task-details-activity" >

         {/* Activity */}
         <div className="activity-title-container">
            <span className=""><GrList /></span>
            <h3 >Activity</h3>
         </div>
         
      </section>
   )
}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const TaskDetailsActivity = connect(mapStateToProps)(_TaskDetailsActivity)