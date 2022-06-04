import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BoardList } from '../cmps/board/board-list.jsx'
import { loadBoards, updateBoard } from '../store/board/board.action.js'
// import BounceBarPreloader from '../assets/imgs/BounceBarPreloader.gif'

export const Workspace = () => {

   const [boards, setBoards] = useState(null)
   // const { boards: boardsFromStore } = useSelector((storeState) => storeState.boardModule)
   const dispatch = useDispatch()

   useEffect(() => {
      loadBoardsAsync()
   }, [])

   const loadBoardsAsync = async () => {
      const boardsFromService = await dispatch(loadBoards())
      console.log('boardsFromService', boardsFromService)
      setBoards(boardsFromService)
   }

   const onUpdateBoard = async (updatedBoard) => {
      console.log('updatedBoard', updatedBoard)

      await dispatch(updateBoard(updatedBoard))
      const updatedBoards = boards.map(board => board._id === updatedBoard._id ? updatedBoard : board)
      setBoards(updatedBoards)
   }

   if (!boards) return <div className="icon-bars">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
   </div>
   // if (!boards) return <img className='loader' src={BounceBarPreloader} alt="" />

   return (
      <main className='workspace'>
         <BoardList boards={boards} onUpdateBoard={onUpdateBoard} />
      </main>
   )
}