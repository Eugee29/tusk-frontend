import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadBoards } from '../store/board/board.action.js'
import { boardService } from '../services/board.service.js'
import { updateBoard } from '../store/board/board.action.js'

import { useParams } from 'react-router-dom'

import { BoardHeader } from '../cmps/board-header.jsx'
import { GroupList } from '../cmps/group-list.jsx'
import { TaskDetails } from './task-details.jsx'
import { useDispatch } from 'react-redux'

export const BoardDetails = () => {

  const { boardId } = useParams()
  const [board, setBoard] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    loadBoard()
  }, [])

  const loadBoard = async () => {
    const board = await boardService.getById(boardId)
    setBoard(board)
  }

  const onUpdateBoard = async (groups) => {
    await dispatch(updateBoard({ ...board, groups }))
  }

  if (!board) return <h1>Loading..</h1>
  return (

    <main className='board-details'>
      <BoardHeader board={board} />
      <GroupList groups={board.groups} onUpdateBoard={onUpdateBoard} />

      <Routes>
        <Route path=":groupId/:taskId" element={<TaskDetails />} />
      </Routes>
    </main>
  )
}

// function mapStateToProps(state) {
//   return {
//     boards: state.boardModule.boards
//   }
// }
// const mapDispatchToProps = {
//   loadBoards
// }

// export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)