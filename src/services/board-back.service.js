import { httpService } from './http.service'
import { utilService } from './util.service.js'

const axios = require('axios').default;

export const boardService = {
   query,
   getById,
   save,
   remove,
   getEmptyBoard
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

function getEmptyBoard() {
   return {
      name: 'Board No:' + (Date.now() % 1000),
      img: utilService.getRandomIntInclusive(0, 13),
      price: utilService.getRandomIntInclusive(50, 150),
      labels: ["Doll", "Battery Powered", "Baby"],
      createdAt: Date.now() - utilService.getRandomIntInclusive(10000000, 1000000000),
      inStock: utilService.getRandomIntInclusive(1, 10) <= 5 ? true : false
   }
}