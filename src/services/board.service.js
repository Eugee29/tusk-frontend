import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"

export const boardService = {
    
}

const query = () => {
    const board = httpService.get('../../demo-data.json')
    console.log(board)
}

const loadBoardById = () => {
    httpService.get()
}