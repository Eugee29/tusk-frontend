
import React from 'react'

import { BoardPreview } from './board-preview.jsx'

export const BoardList = ({ boards }) => {

   return (
      <main>
         <h1>YOUR BOARDS</h1>
         <ul className="boards-page-board-section-list">
            {boards.map((board) => <BoardPreview board={board} key={board._id} />)}
         </ul>
      </main>
   )

}