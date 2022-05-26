import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'

export function BoardPreview({ board, onUpdateBoard }) {

   const [isClickStar, setIsClickStar] = useState(false)
   const [updateBoard, setUpdateBoard] = useState(board)

   const history = useNavigate()

   useEffect(() => {
      if (!isClickStar) return
      onUpdateBoard(updateBoard)
   }, [updateBoard])

   const onStarred = (ev) => {
      ev.stopPropagation()
      setUpdateBoard(prevState => ({ ...updateBoard, isStarred: !prevState.isStarred }))
      setIsClickStar(true)
   }

   const onclicked = (ev) => {
      ev.stopPropagation()
      if (isClickStar) return
      history(`/board/${board._id}`)
   }

   return (
      <li className="board-section-list-item ">
         <div onClick={onclicked} className="board-tile" style={{ backgroundImage: `url(${board.style.bgImg})` }} >
            <span className="board-tile-fade"></span>
            <div className="board-tile-details">
               <div className="board-tile-details-name" >
                  {board.title}
               </div>

               <div className="board-tile-details-sub-container">
                  <span className="board-tile-options" onClick={onStarred}>

                     <span className="board-tile-options-star-icon">
                        {!board.isStarred && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="star-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                           <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                        </svg>}
                     </span>

                     <span className="board-tile-options-starred-icon">
                        {board.isStarred && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="star-icon starred" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                           <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>}
                     </span>

                  </span>
               </div>

            </div>
         </div>
      </li>
   )
}
