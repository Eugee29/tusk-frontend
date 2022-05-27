import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector } from 'react-redux'

import card from '../assets/imgs/card.svg'
import { CgCreditCard } from 'react-icons/cg'

function _TaskDetailsTitle({ title }) {

   const { board } = useSelector((storeState) => storeState.boardModule )

   return (
      <header className="task-details-title" >
         {/* <span className="task-title-icon"><img src={card} alt="" /></span> */}
         <span className=""><CgCreditCard/></span>
         <textarea className="main-title" name="" defaultValue={title} cols="30" rows="10"></textarea>
         <div className="sub-title">in list<button>{board.title}</button></div>

      </header>
   )
}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const TaskDetailsTitle = connect(mapStateToProps)(_TaskDetailsTitle)