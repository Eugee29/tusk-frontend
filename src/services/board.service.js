
// import { socketService } from "../services/socket.service.js";

import { httpService } from './http.service'
import { utilService } from './util.service.js'

const axios = require('axios').default;

export const boardService = {
   query,
   getById,
   save,
   remove,
   // getTask,
   getEmptyTodo,
   getEmptyTask,
   getEmptyGroup,
   getEmptyChecklist
}

//Request (Rest:GET) all Data from Backend

async function query(filterBy = {}) {
   try {
      // return await httpService.get('board/', { params:  filterBy  })
      return await httpService.get('board/', { filterBy })
   } catch (err) {
      console.log('cant get boards!');
      throw err
   }
}

// Request (Rest:GET) get a Bug from Backend
async function getById(boardId) {
   try {
      return await httpService.get(`board/${boardId}`)
   } catch (err) {
      console.log('cant get board by id!');
      throw err
   }
}

// Request (Rest:DELETE) delete a Bug from Backend
async function remove(boardId) {
   try {
      return await httpService.delete(`board/${boardId}`)
   } catch (err) {
      console.log('cant delete board');
      throw err
   }
}

// Request (Rest:PUT & POST) update or add new Bug from Backend
async function save(board) {
   try {
      if (board._id) {
         return await httpService.put(`board/${board._id}`, board)
      } else {
         return await httpService.post(`board/`, board)
      }
   } catch (err) {
      console.log('cant save board');
      throw err
   }
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
         fullName: "Eran Avichzer",
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

function getEmptyChecklist() {
  return {
    id: utilService.makeId(),
    title: '',
    todos: []
  }
}