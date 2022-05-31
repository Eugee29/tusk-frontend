import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'

import { loadBoards, updateBoard } from '../store/board/board.action.js'
// import { loadBoards, updateBoard } from '../store/actions/board-back.action.js'

import { BoardList } from '../cmps/board-list.jsx'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const _Workspace = () => {

  const [boards, setBoards] = useState(null)
  const { boards: boardsFromStore } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  useEffect(() => {
    loadBoardsAsync()
  }, [])

  const loadBoardsAsync = async () => {
    const boardsFromSrevice = await dispatch(loadBoards())
    console.log('boardsFromSrevice', boardsFromSrevice)
    setBoards(boardsFromSrevice)
  }

  const onUpdateBoard = async (board) => {
    await dispatch(updateBoard(board))
    setBoards(boardsFromStore)
  }

  return (
    <main className='workspace'>
      {boards && <BoardList boards={boardsFromStore} onUpdateBoard={onUpdateBoard} />}
    </main>
  )
}

function mapStateToProps(state) {
  return {
    boards: state.boardModule.boards
    // boards: state.boardBackModule.boards
  }
}

export const Workspace = connect(mapStateToProps)(_Workspace)
