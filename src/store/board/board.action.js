import { boardService } from "../../services/board.service.js"
import { userService } from "../../services/user.service.js"
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

// Action Creators:
export function getActionRemoveBoard(boardId) {
  return {
    type: 'REMOVE_BOARD',
    boardId
  }
}

export function getActionAddBoard(board) {
  return {
    type: 'ADD_BOARD',
    board
  }
}

export function getActionUpdateBoard(board) {
  return {
    type: 'UPDATE_BOARD',
    board
  }
}

var subscriber

export function loadBoards() {
  return (dispatch) => {
    return boardService.query()
      .then(boards => {
        dispatch({
          type: 'SET_BOARDS',
          boards
        })
        return boards
      })
      .catch(err => {
        // showErrorMsg('Cannot load boards')
        console.log('Cannot load boards', err)
      })

    if (subscriber) boardService.unsubscribe(subscriber)
    subscriber = (ev) => {
      console.log('Got notified', ev.data)
      dispatch(ev.data)
    }
    boardService.subscribe(subscriber)
  }
}

export function loadTask(ids) {
  return (dispatch) => {
    return boardService.getTask(ids)
      .then(task => {
        dispatch({
          type: 'SET_TASK',
          task
        })
        return task
      })
      .catch(err => {
        // showErrorMsg('Cannot load boards')
        console.log('Cannot load task', err)
      })

  }
}

export function removeBoard(boardId) {
  return async (dispatch) => {
    try {
      await boardService.remove(boardId)
      console.log('Deleted Succesfully!')
      dispatch(getActionRemoveBoard(boardId))
      // showSuccessMsg('Board removed')
    } catch (err) {
      // showErrorMsg('Cannot remove board')
      console.log('Cannot remove board', err)
    }
  }
}

export function addBoard(board) {
  return (dispatch) => {

    boardService.save(board)
      .then(savedBoard => {
        console.log('Added Board', savedBoard)
        // dispatch(getActionAddBoard(savedBoard))

        // showSuccessMsg('Board added')
      })
      .catch(err => {
        // showErrorMsg('Cannot add board')
        console.log('Cannot add board', err)
      })
  }
}

export const updateBoard = (board) => {
  return async dispatch => {
    try {
      const savedBoard = await boardService.save(board)
      dispatch({
        type: 'UPDATE_BOARD',
        board: savedBoard
      })
      saveBoard(savedBoard)
      return savedBoard

    } catch (err) {
      console.log('Cannot save board', err)
    }
  }
}

export function saveBoard(board) {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_BOARD',
      board
    })
  }
}


export function addToBoard(board) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_TO_BOARD',
      board
    })
  }
}

export function removeFromBoard(boardId) {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE_FROM_BOARD',
      boardId
    })
  }
}

export function checkout() {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const total = state.boardModule.board.reduce((acc, board) => acc + board.price, 0)
      const score = await userService.changeScore(-total)
      dispatch({ type: 'SET_SCORE', score })
      dispatch({ type: 'CLEAR_BOARD' })
      // showSuccessMsg('Charged you: $' + total.toLocaleString())
    } catch (err) {
      // showErrorMsg('Cannot checkout, login first')
      console.log('BoardActions: err in checkout', err)
    }
  }
}

// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveBoardOptimistic(boardId) {

  return (dispatch, getState) => {

    dispatch({
      type: 'REMOVE_BOARD',
      boardId
    })
    // showSuccessMsg('Board removed')

    boardService.remove(boardId)
      .then(() => {
        console.log('Server Reported - Deleted Succesfully')
      })
      .catch(err => {
        // showErrorMsg('Cannot remove board')
        console.log('Cannot load boards', err)
        dispatch({
          type: 'UNDO_REMOVE_BOARD',
        })
      })
  }
}