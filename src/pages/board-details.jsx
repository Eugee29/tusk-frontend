import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { boardService } from '../services/board.service.js'
import { activityService } from '../services/activity.service.js'
import { socketService } from '../services/socket.service.js'

import { setModal } from '../store/app/app.actions'
import { updateBoard } from '../store/board/board.action.js'

import { BoardHeader } from '../cmps/board/board-header.jsx'
import { GroupList } from '../cmps/group/group-list.jsx'

export const BoardDetails = () => {
  const [board, setBoard] = useState(null)
  const params = useParams()
  const dispatch = useDispatch()
  const { boards } = useSelector(({ boardModule }) => boardModule)
  const { user } = useSelector(({ userModule }) => userModule)

  useEffect(() => {
    loadBoard()
  }, [boards])

  const loadBoard = async () => {
    const board = await boardService.getById(params.boardId)
    setBoard(board)
  }

  const onUpdateBoard = async (board, activity) => {
    let newBoard
    if (activity) {
      newBoard = addActivity(board, activity)
      setBoard(newBoard)
      await dispatch(updateBoard(newBoard))
    } else {
      setBoard({ ...board })
      await dispatch(updateBoard(board))
    }
    socketService.emit('emit-any-change', 'emit from onUpdateBoard')
  }

  const addActivity = (board, activity) => {
    const newBoard = activityService.getActivityUpdatedBoard(
      board,
      activity,
      user
    )
    return newBoard
  }

  if (!board) return <h1>Loading...</h1>

  return (
    <main
      className="board-details"
      style={{
        background:
          board.style.bgImg.length > 10
            ? `url(${board.style.bgImg})`
            : `${board.style.bgImg}`,
      }}
    >
      <BoardHeader board={board} onUpdateBoard={onUpdateBoard} />
      <GroupList board={board} onUpdateBoard={onUpdateBoard} />
      <Outlet context={{ onUpdateBoard, board }} />
    </main>
  )
}
