import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'

import { loadBoards, updateBoard } from '../store/actions/board.action.js'
// import { loadBoards, updateBoard } from '../store/actions/board-back.action.js'

import { boardService } from '../services/board.service.js'

import { BoardList } from '../cmps/board-list.jsx'

const _Workspace = ({ loadBoards, boards }) => {

   const [load, setLoad] = useState(boards)
   const [isChange, setIsChange] = useState(false)

   useEffect(() => {
      loadBoradsAsync()
   }, [isChange])

   const loadBoradsAsync = async () => {
      await loadBoards()
   }

   const onUpdateBoard = async (board) => {
      updateBoard(board)
      setTimeout(() => {
         setIsChange(!isChange)
      }, 1000);
   }

   return (
      <main className='workspace'>
         <BoardList boards={boards} onUpdateBoard={onUpdateBoard} />
      </main>
   )
}

function mapStateToProps(state) {
   return {
      boards: state.boardModule.boards
      // boards: state.boardBackModule.boards
   }
}
const mapDispatchToProps = {
   loadBoards,
   updateBoard
}

export const Workspace = connect(mapStateToProps, mapDispatchToProps)(_Workspace)
