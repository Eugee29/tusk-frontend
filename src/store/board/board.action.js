
import { socketService } from "../../services/socket.service.js"
import { boardService } from '../../services/board.service.js'
import { store } from '../../store/store.js'

// import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'

;(() => {
socketService.off('on-any-change')
socketService.on('on-any-change', async (msg) => {
  console.log('Socket msg: ', msg)
  const boards = await boardService.query()
  store.dispatch({ type: 'SET_BOARDS', boards })
})
})()

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
      console.log('Added Board', savedBoard);
      dispatch({ type: 'ADD_BOARD', board: savedBoard })
      return savedBoard
      // showSuccessMsg('Board added')
    }
  } catch (err) {
    console.log('cannot add board', err);
    // showErrorMsg('Cannot add board')
  }
}

export function updateBoard(boardToSave) {
  try {
    return async (dispatch) => {
      const savedBoard = await boardService.save(boardToSave)
      dispatch({ type: 'UPDATE_BOARD', board: savedBoard })

      // showSuccessMsg('Board updated')

      // socketService.off('add-member')
      // socketService.on('add-member', (msg) => {
      //    console.log('******SOCKET*****');
      //    console.log(msg);
      // })

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