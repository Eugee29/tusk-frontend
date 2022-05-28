
import React from 'react'

import { BoardPreview } from './board-preview.jsx'

import { HiOutlineStar } from 'react-icons/hi'
import { FaRegClock } from 'react-icons/fa'

export const BoardList = ({ boards, onUpdateBoard }) => {

   const onAddBoard = () => {
   }

   const starredBoards = boards.filter(board => board.isStarred)
   const unStarredBoards = boards.filter(board => !board.isStarred)

   return (
      <main>

         {/* Starred boards */}
         {!!starredBoards.length && <div className="board-section-header">
            <div className="board-section-header-icon">
               <span className="workspace-icon"><HiOutlineStar /></span>
            </div>
            <h3 className="board-section-header-name">Starred boards</h3>
         </div>}

         {!!starredBoards.length && <ul className="board-section-list">
            {starredBoards.map(board => <BoardPreview board={board} onUpdateBoard={onUpdateBoard} key={board._id} />)}
         </ul>}

         {/* Recently viewed */}
         <div className="board-section-header">
            <div className="board-section-header-icon">
               <span className="workspace-icon"><FaRegClock /></span>
            </div>
            <h3 className="board-section-header-name">Recently viewed</h3>
         </div>

         <ul className="board-section-list">
            {unStarredBoards.map((board) => <BoardPreview board={board} onUpdateBoard={onUpdateBoard} key={board._id} />)}

            <li className="board-section-list-item" onClick={() => { onAddBoard() }}>
               <div className="board-tile mod-add">
                  <p className='board-tile-details-center' >
                     <span>Create new board</span>
                  </p>
               </div>
            </li>
         </ul>
      </main>
   )
}

