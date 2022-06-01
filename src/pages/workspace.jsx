import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BoardList } from '../cmps/board-list.jsx'
import { loadBoards, updateBoard } from '../store/board/board.action.js'

export const Workspace = () => {

   const [boards, setBoards] = useState(null)
   // const { boards: boardsFromStore } = useSelector((storeState) => storeState.boardModule)
   const dispatch = useDispatch()

   useEffect(() => {
      loadBoardsAsync()
   }, [])

   const loadBoardsAsync = async () => {
      const boardsFromService = await dispatch(loadBoards())
      console.log('boardsFromSrevice', boardsFromService);
      setBoards(boardsFromService)
   }

   const onUpdateBoard = async (updatedBoard) => {
      console.log('updatedBoard', updatedBoard);

      await dispatch(updateBoard(updatedBoard))
      const updatedBoards = boards.map( board => board._id === updatedBoard._id  ? updatedBoard : board)
      setBoards(updatedBoards)
   }

   return (
      <main className='workspace'>
         {boards && <BoardList boards={boards} onUpdateBoard={onUpdateBoard} />}
      </main>
   )
}