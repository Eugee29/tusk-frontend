import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { boardService } from '../services/board.service.js'
import { activityService } from '../services/activity.service.js'
import { socketService } from '../services/socket.service.js'

import { updateBoard } from '../store/board/board.action.js'
import { loadUsers } from '../store/user/user.action.js'

import { BoardHeader } from '../cmps/board/board-header.jsx'
import { GroupList } from '../cmps/group/group-list.jsx'

export const BoardDetails = () => {
  const [board, setBoard] = useState(null)
  const [users, setUsers] = useState(null)
  const params = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector(({ userModule }) => userModule)

  useEffect(() => {
    loadBoard()
    loadUsersAsync()
    socketService.emit('listen-to-board', params.boardId)
    socketService.on('board-activity', loadBoard)
    return () => {
      socketService.emit('leave-board', params.boardId)
    }
    // eslint-disable-next-line
  }, [])

  const loadBoard = async (updatedBoard) => {
    console.log(updatedBoard)
    if (!updatedBoard) updatedBoard = await boardService.getById(params.boardId)
    setBoard(updatedBoard)
  }

  const loadUsersAsync = async () => {
    if (!users) setUsers(await dispatch(loadUsers()))
  }

  const onUpdateBoard = async (board, activity) => {
    board = { ...board }
    if (activity) board = addActivity(board, activity)
    dispatch(updateBoard(board))
    setBoard(board)
    // socketService.emit('board-activity')
  }

  const addActivity = (board, activity) => {
    const newBoard = activityService.getActivityUpdatedBoard(board, activity, user)
    return newBoard
  }

  if (!board)
    return (
      <div className="icon-bars">
        <div className="bar board"></div>
        <div className="bar board"></div>
        <div className="bar board"></div>
      </div>
    )

  return (
    <main
      className="board-details"
      style={{
        background: board.style.bgImg.length > 10 ? `url(${board.style.bgImg})` : `${board.style.bgImg}`,
      }}
    >
      <BoardHeader board={board} onUpdateBoard={onUpdateBoard} />
      <GroupList board={board} onUpdateBoard={onUpdateBoard} />
      <Outlet context={{ onUpdateBoard, board }} />
    </main>
  )
}
