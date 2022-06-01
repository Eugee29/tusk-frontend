
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
// import { getActionRemoveBoard, getActionAddBoard, getActionUpdateBoard } from '../store/board/board.action.js'

const STORAGE_KEY = 'board'
const boardChannel = new BroadcastChannel('boardChannel')
// const listeners = []

export const boardService = {
   query,
   getById,
   save,
   remove,
   getEmptyTask,
   getEmptyGroup,
   subscribe,
   unsubscribe,
   getTask,
   getEmptyTodo,

}
window.cs = boardService

function query() {
   return storageService.query(STORAGE_KEY)
}

function getById(boardId) {
   return storageService.get(STORAGE_KEY, boardId)
   // return axios.get(`/api/board/${boardId}`)
}

function getTask(ids) {
   return storageService.getTask(STORAGE_KEY, ids)
   // return axios.get(`/api/board/${boardId}`)
}

async function remove(boardId) {
   // return new Promise((resolve, reject) => {
   //     setTimeout(reject, 2000)
   // })
   // return Promise.reject('Not now!');
   await storageService.remove(STORAGE_KEY, boardId)
   // boardChannel.postMessage(getActionRemoveBoard(boardId))
}

async function save(board) {
   // debugger
   var savedBoard

   if (board._id) {
      savedBoard = await storageService.put(STORAGE_KEY, board)
      // boardChannel.postMessage(getActionUpdateBoard(savedBoard))

   } else {
      // Later, owner is set by the backend
      board.owner = userService.getLoggedinUser()
      savedBoard = await storageService.post(STORAGE_KEY, board)
      // boardChannel.postMessage(getActionAddBoard(savedBoard))
   }
   return savedBoard
}

function getEmptyTask(title) {
   return {
      id: utilService.makeId(),
      createdAt: Date.now(),
      archivedAt: null,
      title,
      description: "",
      checklists: [],
      members: [],
      labelIds: [],
      dueDate: null,
      byMember: {
         _id: "u102",
         username: "Eranavichzer",
         fullname: "Eran Avichzer",
         imgURL: "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      style: {}
   }
}

function getEmptyGroup(title) {
   return {
      id: utilService.makeId(),
      title,
      archivedAt: null,
      tasks: []
   }
}

function getEmptyTodo() {
   return {
      id: utilService.makeId(),
      isDone: false,
      title: ''
   }
}

function subscribe(listener) {
   boardChannel.addEventListener('message', listener)
}

function unsubscribe(listener) {
   boardChannel.removeEventListener('message', listener)
}