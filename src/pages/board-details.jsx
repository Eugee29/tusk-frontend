import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { boardService } from '../services/board.service.js'
import { activityService } from '../services/activity.service.js'
import { setModal } from '../store/app/app.actions'
import { updateBoard } from '../store/board/board.action.js'

import { BoardHeader } from '../cmps/board-header.jsx'
import { GroupList } from '../cmps/group-list.jsx'
import { utilService } from '../services/util.service.js'
import { type } from '@testing-library/user-event/dist/type'

export const BoardDetails = () => {
  const params = useParams()
  const [board, setBoard] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    loadBoard()
  }, [])

  const loadBoard = async () => {
    const board = await boardService.getById(params.boardId)
    setBoard(board)

    // dispatch(saveBoard(board))
  }

  const onUpdateBoard = async (board, activity) => {
    let newBoard
    if (activity) {
      newBoard = addActivity(board, activity)
      await dispatch(updateBoard(newBoard))
      setBoard(newBoard)
    } else {
      await dispatch(updateBoard(board))
      setBoard(board)
    }
  }

  const addActivity = (board, activity) => {
    const newBoard = activityService.getActivityUpdatedBoard(board, activity)
    return newBoard
  }

  const closeModal = () => {
    dispatch(setModal(null))
  }

  if (!board) return <h1>Loading..</h1>

  return (
    <main className='board-details' onClick={closeModal} style={{ backgroundImage: `url(${board.style.bgImg})` }}>
      <BoardHeader board={board} onUpdateBoard={onUpdateBoard} />
      <GroupList board={board} onUpdateBoard={onUpdateBoard} />
      <Outlet context={{ onUpdateBoard, board }} />
    </main>
  )
}