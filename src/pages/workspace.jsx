import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'

import { loadBoards, updateBoard } from '../store/actions/board.action.js'
// import { loadBoards, updateBoard } from '../store/actions/board-back.action.js'

import { boardService } from '../services/board.service.js'

import { BoardList } from '../cmps/board-list.jsx'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const _Workspace = () => {

   const [boards, setBoards] = useState(null)
   const { boards: boardsFromStore } = useSelector((storeState) => storeState.boardModule )
   const dispatch = useDispatch()

   useEffect(() => {
      loadBoradsAsync()
   }, [])

   const loadBoradsAsync = async () => {
      const boardsFromSrevice = await dispatch(loadBoards())
      setBoards(boardsFromSrevice)
   }

   const onUpdateBoard = async (board) => {
      await dispatch(updateBoard(board))
      setBoards(boardsFromStore)
   }

   return (
      <main className='workspace'>
         { boards && <BoardList boards={boardsFromStore} onUpdateBoard={ onUpdateBoard} />}
      </main>
   )
}

function mapStateToProps(state) {
   return {
      boards: state.boardModule.boards
      // boards: state.boardBackModule.boards
   }
}
// const mapDispatchToProps = {
//    loadBoards,
//    updateBoard
// }

export const Workspace = connect(mapStateToProps)(_Workspace)
