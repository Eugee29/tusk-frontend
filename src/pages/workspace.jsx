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

      const savedBoard = await dispatch(updateBoard(updatedBoard))
      const boardIdx = boards.findIndex(board => board._id === updatedBoard._id)
      setBoards(...boards, [boards[boardIdx] = updatedBoard])

      console.log('savedBoard', savedBoard);
      console.log(boardIdx);
      console.log('new board', boards);
   }

   return (
      <main className='workspace'>
         {boards && <BoardList boards={boards} onUpdateBoard={onUpdateBoard} />}
      </main>
   )
}