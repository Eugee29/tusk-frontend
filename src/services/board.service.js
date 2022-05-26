
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { getActionRemoveBoard, getActionAddBoard, getActionUpdateBoard } from '../store/board/board.action.js'

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
   boardChannel.postMessage(getActionRemoveBoard(boardId))
}

async function save(board) {
   // debugger
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
//         "title": "Startup",
//         "archivedAt": null,
//         "createdAt": 1653444434344,
//         "isStarred": false,
//         "createdBy": {
//             "_id": "u101",
//             "fullName": "Tal Ofer",
//             "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//         },
//         "style": {
//             "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/7a648fca5d7189b4f9ea0bf9441bdec1/photo-1653233871814-7e7b75102e3c.jpg"
//         },
//         "labels": [
//             {
//                 "id": "l101",
//                 "title": "I'm on it",
//                 "color": "#63be53"
//             },
//             {
//                 "id": "l102",
//                 "title": "",
//                 "color": "#eed62b"
//             },
//             {
//                 "id": "l103",
//                 "title": "",
//                 "color": "#fa9e30"
//             },
//             {
//                 "id": "l104",
//                 "title": "Important",
//                 "color": "#e6574c"
//             },
//             {
//                 "id": "l105",
//                 "title": "",
//                 "color": "#c374df"
//             },
//             {
//                 "id": "l106",
//                 "title": "Budget",
//                 "color": "#2579bd"
//             }
//         ],
//         "members": [
//             {
//                 "_id": "u101",
//                 "fullName": "Tal Ofer",
//                 "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//             }
//         ],
//         "groups": [
//             {
//                 "id": "g101",
//                 "title": "Production",
//                 "archivedAt": null,
//                 "tasks": [
//                     {
//                         "id": "t101",
//                         "createdAt": 1653403712,
//                         "archivedAt": null,
//                         "title": "Cut 5 scenes to fit budget",
//                         "description": "Cut the sequel where the cow meets the banga and make it comprehensible ",
//                         "checklist": [
//                             {
//                                 "id": "",
//                                 "title": "",
//                                 "todos": [
//                                     {
//                                         "id": "t515",
//                                         "title": "Go to sleep",
//                                         "isDone": true
//                                     },
//                                     {
//                                         "id": "t511",
//                                         "title": "Wakeup",
//                                         "isDone": false
//                                     }
//                                 ]
//                             }
//                         ],
//                         "attachments": [
//                             {
//                                 "id": "a158",
//                                 "createdAt": 165563403712,
//                                 "fileUrl": "https://bestlifeonline.com/wp-content/uploads/sitesfgdfgdfgdfgdfgka.jpg?quality=82&strip=all"
//                             }
//                         ],
//                         "comments": [
//                             {
//                                 "id": "id1243",
//                                 "txt": "Wow such an importent thing to do",
//                                 "createdAt": 1653403712,
//                                 "byMember": {
//                                     "_id": "u103",
//                                     "fullName": "Eran Avichzer",
//                                     "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                                 }
//                             }
//                         ],
//                         "memberIds": [
//                             "u101",
//                             "u102",
//                             "u103"
//                         ],
//                         "labelIds": [
//                             "l101"
//                         ],
//                         "dueDate": 1656082112,
//                         "byMember": {
//                             "_id": "u103",
//                             "username": "Eranavichzer",
//                             "fullName": "Eran Avichzer",
//                             "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                         },
//                         "style": ''{
//                         }
//                     }
//                 ]
//             }
//         ],
//         "activities": [
//             {
//                 "id": "ac152",
//                 "txt": "Add comment",
//                 "createdAt": 165344444,
//                 "byMember": {
//                     "_id": "u101",
//                     "fullName": "Tal Ofer",
//                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//                 },
//                 "task": {
//                     "id": "t101",
//                     "title": "Cut 5 scenes to fit budget"
//                 }
//             }
//         ]
//     }
// )

//"bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/1f0c8cea484624dec353909411377196/photo-1653161926627-c4b492a300c9.jpg"
//"bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x300/cf4320a899c8454f9f515e8b44623b6e/photo-1636476144162-c8bf391778b2.jpg"
//"bgImg": "https://trello-backgrounds.s3.amazonaws.com/5755843411a2cd8c83067c03/480x320/cf2d1e29e8e3a4857a5f58f500fb464c/ian-dooley-407846-unsplash.jpg"
//"bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/540x960/5ea8e58274d92bff09a965995677906b/photo-1653299832314-5d3dc1e5a83c.jpg"
//"bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/7a648fca5d7189b4f9ea0bf9441bdec1/photo-1653233871814-7e7b75102e3c.jpg"
//   {
//     "_id": "b101",
//     "title": "Writing a movie",
//     "archivedAt": null,
//     "createdAt": 1653444434344,
//     "createdBy": {
//       "_id": "u101",
//       "fullName": "Tal Ofer",
//       "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//     },
//     "style": {
//       "bgColor": "#155186"
//     },
//     "labels": [
//       {
//         "id": "l101",
//         "title": "I'm on it",
//         "color": "#63be53"
//       },
//       {
//         "id": "l102",
//         "title": "",
//         "color": "#eed62b"
//       },
//       {
//         "id": "l103",
//         "title": "",
//         "color": "#fa9e30"
//       },
//       {
//         "id": "l104",
//         "title": "Important",
//         "color": "#e6574c"
//       },
//       {
//         "id": "l105",
//         "title": "",
//         "color": "#c374df"
//       },
//       {
//         "id": "l106",
//         "title": "Budget",
//         "color": "#2579bd"
//       }
//     ],
//     "members": [
//       {
//         "_id": "u101",
//         "fullName": "Tal Ofer",
//         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//       }
//     ],
//     "groups": [
//       {
//         "id": "g101",
//         "title": "Production",
//         "archivedAt": null,
//         "tasks": [
//           {
//             "id": "t101",
//             "createdAt": 1653403712,
//             "archivedAt": null,
//             "title": "Cut 5 scenes to fit budget",
//             "description": "Cut the sequel where the cow meets the banga and make it comprehensible ",
//             "checklist": [
//               {
//                 "id": "",
//                 "title": "",
//                 "todos": [
//                   {
//                     "id": "t515",
//                     "title": "Go to sleep",
//                     "isDone": true
//                   },
//                   {
//                     "id": "t511",
//                     "title": "Wakeup",
//                     "isDone": false
//                   }
//                 ]
//               }
//             ],
//             "attachments": [
//               {
//                 "id": "a158",
//                 "createdAt": 165563403712,
//                 "fileUrl": "https://bestlifeonline.com/wp-content/uploads/sitesfgdfgdfgdfgdfgka.jpg?quality=82&strip=all"
//               }
//             ],
//             "comments": [
//               {
//                 "id": "id1243",
//                 "txt": "Wow such an importent thing to do",
//                 "createdAt": 1653403712,
//                 "byMember": {
//                   "_id": "u103",
//                   "fullName": "Eran Avichzer",
//                   "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                 }
//               }
//             ],
//             "memberIds": [
//               "u101",
//               "u102",
//               "u103"
//             ],
//             "labelIds": [
//               "l101"
//             ],
//             "dueDate": 1656082112,
//             "byMember": {
//               "_id": "u103",
//               "username": "Eranavichzer",
//               "fullName": "Eran Avichzer",
//               "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//             },
//             "style": {
//               "imgURL": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=8sddsvdsvl"
//             }
//           },
//           {
//             "id": "t102",
//             "createdAt": 1653403712,
//             "archivedAt": null,
//             "title": "Cut 5 scenes to fit budget",
//             "description": "Cut the sequel where the cow meets the banga and make it comprehensible ",
//             "checklist": [
//               {
//                 "id": "",
//                 "title": "",
//                 "todos": [
//                   {
//                     "id": "t515",
//                     "title": "Go to sleep",
//                     "isDone": true
//                   },
//                   {
//                     "id": "t511",
//                     "title": "Wakeup",
//                     "isDone": false
//                   }
//                 ]
//               }
//             ],
//             "attachments": [
//               {
//                 "id": "a158",
//                 "createdAt": 165563403712,
//                 "fileUrl": "https://bestlifeonline.com/wp-content/uploads/sitesfgdfgdfgdfgdfgka.jpg?quality=82&strip=all"
//               }
//             ],
//             "comments": [
//               {
//                 "id": "id1243",
//                 "txt": "Wow such an importent thing to do",
//                 "createdAt": 1653403712,
//                 "byMember": {
//                   "_id": "u103",
//                   "fullName": "Eran Avichzer",
//                   "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                 }
//               }
//             ],
//             "memberIds": [
//               "u101",
//               "u102",
//               "u103"
//             ],
//             "labelIds": [
//               "l101"
//             ],
//             "dueDate": 1656082112,
//             "byMember": {
//               "_id": "u103",
//               "username": "Eranavichzer",
//               "fullName": "Eran Avichzer",
//               "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//             },
//             "style": {
//               "imgURL": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=8sddsvdsvl"
//             }
//           },
//           {
//             "id": "t103",
//             "createdAt": 1653403712,
//             "archivedAt": null,
//             "title": "Cut 5 scenes to fit budget",
//             "description": "Cut the sequel where the cow meets the banga and make it comprehensible ",
//             "checklist": [
//               {
//                 "id": "",
//                 "title": "",
//                 "todos": [
//                   {
//                     "id": "t515",
//                     "title": "Go to sleep",
//                     "isDone": true
//                   },
//                   {
//                     "id": "t511",
//                     "title": "Wakeup",
//                     "isDone": false
//                   }
//                 ]
//               }
//             ],
//             "attachments": [
//               {
//                 "id": "a158",
//                 "createdAt": 165563403712,
//                 "fileUrl": "https://bestlifeonline.com/wp-content/uploads/sitesfgdfgdfgdfgdfgka.jpg?quality=82&strip=all"
//               }
//             ],
//             "comments": [
//               {
//                 "id": "id1243",
//                 "txt": "Wow such an importent thing to do",
//                 "createdAt": 1653403712,
//                 "byMember": {
//                   "_id": "u103",
//                   "fullName": "Eran Avichzer",
//                   "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                 }
//               }
//             ],
//             "memberIds": [
//               "u101",
//               "u102",
//               "u103"
//             ],
//             "labelIds": [
//               "l101"
//             ],
//             "dueDate": 1656082112,
//             "byMember": {
//               "_id": "u103",
//               "username": "Eranavichzer",
//               "fullName": "Eran Avichzer",
//               "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//             },
//             "style": {
//               "imgURL": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=8sddsvdsvl"
//             }
//           }
//         ]
//       }
//     ],
//     "activities": [
//       {
//         "id": "ac152",
//         "txt": "Add comment",
//         "createdAt": 165344444,
//         "byMember": {
//           "_id": "u101",
//           "fullName": "Tal Ofer",
//           "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//         },
//         "task": {
//           "id": "t101",
//           "title": "Cut 5 scenes to fit budget"
//         }
//       }
//     ]
//   })
//   .then(x => console.log(x))





// TEST DATA 2

// storageService.post(STORAGE_KEY, {
//    "_id": "b101",
//    "title": "Test",
//    "archivedAt": null,
//    "createdAt": 1653444434344,
//    "createdBy": {
//       "_id": "u101",
//       "fullName": "Tal Ofer",
//       "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//    },
//    "style": {
//       "bgColor": "#155186"
//    },
//    "labels": [
//       {
//          "id": "l101",
//          "title": "I'm on it",
//          "color": "#63be53"
//       },
//       {
//          "id": "l102",
//          "title": "",
//          "color": "#eed62b"
//       },
//       {
//          "id": "l103",
//          "title": "",
//          "color": "#fa9e30"
//       },
//       {
//          "id": "l104",
//          "title": "Important",
//          "color": "#e6574c"
//       },
//       {
//          "id": "l105",
//          "title": "",
//          "color": "#c374df"
//       },
//       {
//          "id": "l106",
//          "title": "Budget",
//          "color": "#2579bd"
//       }
//    ],
//    "members": [
//       {
//          "_id": "u101",
//          "fullName": "Tal Ofer",
//          "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//       },
//       {
//          "_id": "u102",
//          "fullName": "Uri Gruda",
//          "imgUrl": "https://nationaltoday.com/wp-content/uploads/2020/02/National-Hedgehog-Day.jpg"
//       }
//    ],
//    "groups": [
//       {
//          "id": "g101",
//          "title": "Production",
//          "archivedAt": null,
//          "tasks": [

//             {
//                "id": "t101",
//                "createdAt": 1653403712,
//                "archivedAt": null,
//                "title": "Cut 5 scenes to fit budget",
//                "description": "Cut the sequel where the cow meets the banga and make it comprehensible ",
//                "checklist": [
//                   {
//                      "id": "",
//                      "title": "",
//                      "todos": [
//                         {
//                            "id": "t515",
//                            "title": "Go to sleep",
//                            "isDone": true
//                         },
//                         {
//                            "id": "t511",
//                            "title": "Wakeup",
//                            "isDone": false
//                         }
//                      ]
//                   }
//                ],
//                "attachments": [
//                   {
//                      "id": "a158",
//                      "createdAt": 165563403712,
//                      "fileUrl": "https://bestlifeonline.com/wp-content/uploads/sitesfgdfgdfgdfgdfgka.jpg?quality=82&strip=all"
//                   }
//                ],
//                "cover": {
//                   "isFullCover": false,
//                   "bgColor": "#168426"
//                },
//                "comments": [
//                   {
//                      "id": "id1243",
//                      "txt": "Wow such an importent thing to do",
//                      "createdAt": 1653403712,
//                      "byMember": {
//                         "_id": "u103",
//                         "fullName": "Eran Avichzer",
//                         "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                      }
//                   }
//                ],
//                "memberIds": [
//                   {
//                      "_id": "u101",
//                      "fullName": "Tal Ofer",
//                    },
//                    {
//                      "_id": "u102",
//                      "fullName": "Uri Gruda",
//                    }
//                ],
//                "labelIds": ["l101"],
//                "dueDate": 1656082112,
//                "byMember": {
//                   "_id": "u103",
//                   "username": "Eranavichzer",
//                   "fullName": "Eran Avichzer",
//                   "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                },
//                "style": {
//                   "imgURL": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=8sddsvdsvl"
//                }
//             },
//             {
//                "id": "t102",
//                "createdAt": 1653403712,
//                "archivedAt": null,
//                "title": "Tell waterboy to bring more water",
//                "status": "",
//                "description": "Everybody is thirsty. Get Shishiot Mey Eden asap",
//                "comments": [],
//                "memberIds": ["u101", "u103"],
//                "labelIds": ["l104"],
//                "dueDate": null,
//                "byMember": {
//                   "_id": "u102",
//                   "username": "Urigruda",
//                   "fullName": "Uri Gruda",
//                   "imgUrl": "https://nationaltoday.com/wp-content/uploads/2020/02/National-Hedgehog-Day.jpg"
//                },
//                "style": {
//                   "bgColor": "#63be53"
//                }
//             },
//             {
//                "id": "t1024",
//                "createdAt": 1653403712,
//                "archivedAt": null,
//                "title": "Tell waterboy to bring more water",
//                "status": "",
//                "description": "Everybody is thirsty. Get Shishiot Mey Eden asap",
//                "comments": [],
//                "memberIds": ["u101", "u103"],
//                "labelIds": ["l104"],
//                "dueDate": null,
//                "byMember": {
//                   "_id": "u102",
//                   "username": "Urigruda",
//                   "fullName": "Uri Gruda",
//                   "imgUrl": "https://nationaltoday.com/wp-content/uploads/2020/02/National-Hedgehog-Day.jpg"
//                },
//                "style": {
//                   "bgColor": "#63be53"
//                }
//             },
//             {
//                "id": "t1023",
//                "createdAt": 1653403712,
//                "archivedAt": null,
//                "title": "Tell waterboy to bring more water",
//                "status": "",
//                "description": "Everybody is thirsty. Get Shishiot Mey Eden asap",
//                "comments": [],
//                "memberIds": ["u101", "u103"],
//                "labelIds": ["l104"],
//                "dueDate": null,
//                "byMember": {
//                   "_id": "u102",
//                   "username": "Urigruda",
//                   "fullName": "Uri Gruda",
//                   "imgUrl": "https://nationaltoday.com/wp-content/uploads/2020/02/National-Hedgehog-Day.jpg"
//                },
//                "style": {
//                   "bgColor": "#63be53"
//                }
//             },
//             {
//                "id": "t1022",
//                "createdAt": 1653403712,
//                "archivedAt": null,
//                "title": "Tell waterboy to bring more water",
//                "status": "",
//                "description": "Everybody is thirsty. Get Shishiot Mey Eden asap",
//                "comments": [],
//                "memberIds": ["u101", "u103"],
//                "labelIds": ["l104"],
//                "dueDate": null,
//                "byMember": {
//                   "_id": "u102",
//                   "username": "Urigruda",
//                   "fullName": "Uri Gruda",
//                   "imgUrl": "https://nationaltoday.com/wp-content/uploads/2020/02/National-Hedgehog-Day.jpg"
//                },
//                "style": {
//                   "bgColor": "#63be53"
//                }
//             },
//             {
//                "id": "t1021",
//                "createdAt": 1653403712,
//                "archivedAt": null,
//                "title": "Tell waterboy to bring more water",
//                "status": "",
//                "description": "Everybody is thirsty. Get Shishiot Mey Eden asap",
//                "comments": [],
//                "memberIds": ["u101", "u103"],
//                "labelIds": ["l104"],
//                "dueDate": null,
//                "byMember": {
//                   "_id": "u102",
//                   "username": "Urigruda",
//                   "fullName": "Uri Gruda",
//                   "imgUrl": "https://nationaltoday.com/wp-content/uploads/2020/02/National-Hedgehog-Day.jpg"
//                },
//                "style": {
//                   "bgColor": "#63be53"
//                }
//             }
//          ]
//       },
//       {
//          "id": "g102",
//          "title": "Script",
//          "archivedAt": null,
//          "tasks": [

//             {
//                "id": "t103",
//                "createdAt": 1653403712,
//                "archivedAt": null,
//                "title": "Get a very expensive lens",
//                "status": "",
//                "description": "Be careful! It's expensive!",
//                "comments": [
//                   {
//                      "id": "",
//                      "txt": "Best movie",
//                      "createdAt": 165563403712,
//                      "byMember": {
//                         "_id": "u103",
//                         "fullName": "Eran Avichzer",
//                         "imgUrl": "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all"
//                      }
//                   }
//                ],
//                "memberIds": ["u102", "u103"],
//                "labelIds": ["l104", "l106"],
//                "dueDate": null,
//                "byMember": {
//                   "_id": "u101",
//                   "username": "Talofer",
//                   "fullName": "Tal Ofer",
//                   "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//                },
//                "style": {
//                   "imgURL": "https://houseofpostcards.pl/userdata/public/gfx/50594/Wiskacza.jpg"
//                }
//             }
//          ]
//       }
//    ],
//    "activities": [
//       {
//          "id": "ac152",
//          "txt": "Add comment",
//          "createdAt": 165344444,
//          "byMember": {
//             "_id": "u101",
//             "fullName": "Tal Ofer",
//             "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
//          },
//          "task": {
//             "id": "t101",
//             "title": "Cut 5 scenes to fit budget"
//          }
//       }

//    ]
// }
// )