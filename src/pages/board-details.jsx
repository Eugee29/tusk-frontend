import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { loadBoards } from '../store/actions/board.action.js'
import { boardService } from '../services/board.service.js'

import { BoardList } from '../cmps/board-list.jsx'
import { useParams } from 'react-router-dom'

const _BoardDetails = () => {

   const { boardId } = useParams()
   const [board, setBoard] = useState(null)

   useEffect(() => {
      loadBoard()
   }, [])

   const loadBoard = async () => {
      const board = await boardService.getById(boardId)
      // console.log(board)
      setBoard(board)
   }

   if (!board) return <h1>Loading..</h1>
   // console.log(board.title)
   return (
         
      <main className='board-details'>
            
      </main>
      )

}

function mapStateToProps(state) {
   return {
      boards: state.boardModule.boards
   }
}
const mapDispatchToProps = {
   loadBoards
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)