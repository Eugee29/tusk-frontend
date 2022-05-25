
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { getActionRemoveBoard, getActionAddBoard, getActionUpdateBoard } from '../store/actions/board.action.js'

const STORAGE_KEY = 'board'
const boardChannel = new BroadcastChannel('boardChannel')
// const listeners = []

export const boardService = {
    query,
    getById,
    save,
    remove,
    getEmptyBoard,
    subscribe,
    unsubscribe
    
}
window.cs = boardService;

function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
    // return axios.get(`/api/board/${boardId}`)
}
async function remove(boardId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    await storageService.remove(STORAGE_KEY, boardId)
    boardChannel.postMessage(getActionRemoveBoard(boardId))
}
async function save(board) {
    var savedBoard
    if (board._id) {
        savedBoard = await storageService.put(STORAGE_KEY, board)
        boardChannel.postMessage(getActionUpdateBoard(savedBoard))
        
    } else {
        // Later, owner is set by the backend
        board.owner = userService.getLoggedinUser()
        savedBoard = await storageService.post(STORAGE_KEY, board)
        boardChannel.postMessage(getActionAddBoard(savedBoard))
    }
    return savedBoard
}

function getEmptyBoard() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}

function subscribe(listener) {
    boardChannel.addEventListener('message', listener)
}
function unsubscribe(listener) {
    boardChannel.removeEventListener('message', listener)
}


//TEST DATA
// storageService.post(STORAGE_KEY, 
//     {
//         "_id": "b101",
//         "title": "Writing a movie",
//         "archivedAt": null,
//         "createdAt": 1653444434344,
//         "createdBy": {
//            "_id": "u101",
//            "fullName": "Tal Ofer",
//            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//         },
//         "style": {
//            "bgColor": "#155186"
//         },
//         "labels": [
//            {
//               "id": "l101",
//               "title": "I'm on it",
//               "color": "#63be53"
//            },
//            {
//               "id": "l102",
//               "title": "",
//               "color": "#eed62b"
//            },
//            {
//               "id": "l103",
//               "title": "",
//               "color": "#fa9e30"
//            },
//            {
//               "id": "l104",
//               "title": "Important",
//               "color": "#e6574c"
//            },
//            {
//               "id": "l105",
//               "title": "",
//               "color": "#c374df"
//            },
//            {
//               "id": "l106",
//               "title": "Budget",
//               "color": "#2579bd"
//            }
//         ],
//         "members": [
//            {
//               "_id": "u101",
//               "fullName": "Tal Ofer",
//               "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//            }
//         ],
//         "groups": [
//            {
//               "id": "g101",
//               "title": "Production",
//               "archivedAt": null,
//               "tasks": [
//                  {
//                     "id": "t101",
//                     "createdAt": 1653403712,
//                     "archivedAt": null,
//                     "title": "Cut 5 scenes to fit budget",
//                     "description": "Cut the sequel where the cow meets the banga and make it comprehensible ",
//                     "checklist": [
//                        {
//                           "id": "",
//                           "title": "",
//                           "todos": [
//                              {
//                                 "id": "t515",
//                                 "title": "Go to sleep",
//                                 "isDone": true
//                              },
//                              {
//                                 "id": "t511",
//                                 "title": "Wakeup",
//                                 "isDone": false
//                              }
//                           ]
//                        }
//                     ],
//                     "attachments": [
//                        {
//                           "id": "a158",
//                           "createdAt": 165563403712,
//                           "fileUrl": "https://bestlifeonline.com/wp-content/uploads/sitesfgdfgdfgdfgdfgka.jpg?quality=82&strip=all"
//                        }
//                     ],
//                     "comments": [
//                        {
//                           "id": "id1243",
//                           "txt": "Wow such an importent thing to do",
//                           "createdAt": 1653403712,
//                           "byMember": {
//                              "_id": "u103",
//                              "fullName": "Eran Avichzer",
//                              "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                           }
//                        }
//                     ],
//                     "memberIds": [
//                        "u101",
//                        "u102",
//                        "u103"
//                     ],
//                     "labelIds": [
//                        "l101"
//                     ],
//                     "dueDate": 1656082112,
//                     "byMember": {
//                        "_id": "u103",
//                        "username": "Eranavichzer",
//                        "fullName": "Eran Avichzer",
//                        "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                     },
//                     "style": {
//                        "imgURL": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=8sddsvdsvl"
//                     }
//                  }
//               ]
//            }
//         ],
//         "activities": [
//            {
//               "id": "ac152",
//               "txt": "Add comment",
//               "createdAt": 165344444,
//               "byMember": {
//                  "_id": "u101",
//                  "fullName": "Tal Ofer",
//                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//               },
//               "task": {
//                  "id": "t101",
//                  "title": "Cut 5 scenes to fit budget"
//               }
//            }
//         ]
//      })
//     // .then(x => console.log(x))




