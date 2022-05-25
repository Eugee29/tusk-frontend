import { Link } from "react-router-dom";
import React from 'react'

export function BoardPreview({ board }) {


   return (
      <li className="boards-page-board-section-list-item">
         <Link to={`/board/${board._id}`}>
            <div className="board-tile-details">
               {board.title}
            </div>
         </Link>
      </li>

   )
}
