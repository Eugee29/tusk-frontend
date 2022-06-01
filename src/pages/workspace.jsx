import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BoardList } from '../cmps/board/board-list.jsx'
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
    console.log('boardsFromSrevice', boardsFromService)
    setBoards(boardsFromService)
  }

  const onUpdateBoard = async (updatedBoard) => {
    console.log('updatedBoard', updatedBoard)

    await dispatch(updateBoard(updatedBoard))
    const updatedBoards = boards.map(board => board._id === updatedBoard._id ? updatedBoard : board)
    setBoards(updatedBoards)
  }

  if (!boards) return <h1>Loading...</h1>

  return (
    <main className='workspace'>
      <BoardList boards={boards} onUpdateBoard={onUpdateBoard} />
    </main>
  )
}