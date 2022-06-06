import { boardService } from '../../services/board.service.js'
import { socketService } from '../../services/socket.service.js'

export function setBoard(board) {
  return (dispatch) => {
    dispatch({ type: 'BOARD', board })
  }
}

export function loadBoards() {
  try {
    return async (dispatch) => {
      const boards = await boardService.query()
      console.log('Got Boards', boards)
      dispatch({ type: 'SET_BOARDS', boards })
      return boards
    }
  } catch (err) {
    console.log('cannot load boards', err)
  }
}

export function addBoard(board) {
  try {
    return async (dispatch) => {
      const savedBoard = await boardService.save(board)
      console.log('Added Board', savedBoard)
      dispatch({ type: 'ADD_BOARD', board: savedBoard })
      return savedBoard
      // showSuccessMsg('Board added')
    }
  } catch (err) {
    console.log('cannot add board', err)
    // showErrorMsg('Cannot add board')
  }
}

export function updateBoard(boardToSave) {
  try {
    return async (dispatch) => {
      const savedBoard = await boardService.save(boardToSave)
      // socketService.emit('board-activity', savedBoard)
      dispatch({ type: 'UPDATE_BOARD', board: savedBoard })
      return savedBoard
    }
  } catch (err) {
    console.log('cannot edit board', err)
    // showErrorMsg('Cannot edit board')
  }
}

export function filtering(filterBy) {
  return async (dispatch) => {
    try {
      const boards = await boardService.query(filterBy)
      // console.log('Boards from DB:', boards);
      dispatch({ type: 'SET_BOARDS', boards })
      dispatch({ type: 'FILTER_BOARD', filterBy })
    } catch (err) {
      console.log('cannot filter boards', err)
    }
  }
}

export function removeBoard(boardId) {
  return async (dispatch) => {
    try {
      await boardService.remove(boardId)
      dispatch({ type: 'REMOVE_BOARD', boardId })
      console.log('Deleted Succesfully!')
      // showSuccessMsg('Board removed')
    } catch (err) {
      console.error('Error:', err)
      // showErrorMsg('Cannot remove board')
    }
  }

}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}