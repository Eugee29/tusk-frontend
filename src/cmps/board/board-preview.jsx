import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from 'react'

import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'


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

   const onClicked = (ev) => {
      ev.stopPropagation()
      if (isClickStar) return
      history(`/board/${board._id}`)
   }

   return (
      <li className="board-section-list-item ">

         <div onClick={onClicked} className="board-tile" style={{ background: board.style.bgImg.length > 10 ? `url(${board.style.bgImg})` : `${board.style.bgImg}` }} >

            <span className="board-tile-fade"></span>
            <div className="board-tile-details">
               <div className="board-tile-details-name" >
                  {board.title}
               </div>

               <div className="board-tile-details-sub-container">
                  <span className="board-tile-options" onClick={onStarred}>

                     <span className="board-tile-options-star-icon">
                        {!board.isStarred && <span className="boardlist-icon"><AiOutlineStar /></span>}
                     </span>

                     <span className="board-tile-options-starred-icon">
                        {board.isStarred && <span className="boardlist-icon fill" ><AiFillStar /></span>}
                     </span>

                  </span>
               </div>

            </div>
         </div>
      </li>
   )
}
