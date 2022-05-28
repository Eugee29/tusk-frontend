
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
  unsubscribe,
  getTask

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

// TEST DATA 2

storageService.post(STORAGE_KEY,
  {
    "_id": "b101",
    "title": "Building Tusk",
    "archivedAt": null,
    "createdAt": 1653046611000,
    "isStarred": true,
    "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
    },
    "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/540x960/5ea8e58274d92bff09a965995677906b/photo-1653299832314-5d3dc1e5a83c.jpg"
    },
    "labels": [
      {
        "id": "l101",
        "title": "I'm on it",
        "color": "#63be53"
      },
      {
        "id": "l102",
        "title": "",
        "color": "#eed62b"
      },
      {
        "id": "l103",
        "title": "",
        "color": "#fa9e30"
      },
      {
        "id": "l104",
        "title": "Important",
        "color": "#e6574c"
      },
      {
        "id": "l105",
        "title": "",
        "color": "#c374df"
      },
      {
        "id": "l106",
        "title": "Budget",
        "color": "#2579bd"
      }
    ],
    "members": [
      {
        "_id": "u101",
        "fullName": "Tal Ofer",
        "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
        "_id": "u102",
        "fullName": "Eran Avichzer",
        "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
        "_id": "u103",
        "fullName": "Uri Gruda",
        "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
      }
    ],
    "groups": [
      {
        "id": "g101",
        "title": "Setup",
        "archivedAt": null,
        "tasks": [
          {
            "id": "t101",
            "createdAt": 1653133011000,
            "archivedAt": null,
            "title": "Create a CLI template",
            "description": "Setting the react up so we can begin working",
            "checklists": [
              {
                "id": "c101",
                "title": "CLI",
                "todos": [
                  {
                    "id": "t515",
                    "title": "create npx",
                    "isDone": true
                  },
                  {
                    "id": "t511",
                    "title": "cleaning CLI up",
                    "isDone": false
                  }
                ]
              }
            ],
            "attachments": [
              {
                "id": "a101",
                "createdAt": 1653183411000,
                "fileUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/640px-React_Native_Logo.png"
              }
            ],
            "memberIds": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer"
              }
            ],
            "labelIds": [
              "l101",
              "l102"
            ],
            "dueDate": 1653696000000,
            "byMember": {
              "_id": "u102",
              "username": "Eranavichzer",
              "fullName": "Eran Avichzer",
              "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
            },
            "style": {
              "imgURL": "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
              "isCover": true
            }
          },
          {
            "id": "t108",
            "createdAt": 1653523200000,
            "archivedAt": null,
            "title": "Add Services",
            "description": "Add util and board services",
            "checklists": [
              {
                "id": "c102",
                "title": "Services",
                "todos": [
                  {
                    "id": "t518",
                    "title": "util",
                    "isDone": true
                  },
                  {
                    "id": "t519",
                    "title": "board",
                    "isDone": false
                  }
                ]
              }
            ],
            "members": [
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l105",
              "l102",
              "l104"
            ],
            "dueDate": 1654041600000,
            "byMember": {
              "_id": "u102",
              "username": "Eranavichzer",
              "fullName": "Eran Avichzer",
              "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
            },
            "style": {}
          },
          {
            "id": "t103",
            "createdAt": 1653523200000,
            "archivedAt": null,
            "title": "Create git",
            "description": "Add util and board services",
            "members": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer",
                "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
              },
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l103"
            ],
            "dueDate": 1654214400000,
            "byMember": {
              "_id": "u101",
              "username": "Talofer",
              "fullName": "Tal Ofer",
              "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
            },
            "style": {
              "bgColor": "#eed62b",
              "isCover": false
            }
          },
          {
            "id": "t104",
            "createdAt": 1653436800000,
            "archivedAt": null,
            "title": "Tusk board meeting",
            "description": "Writing guidelines and plans",
            "members": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer",
                "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
              },
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l103",
              "l101"
            ],
            "dueDate": 1653868800000,
            "byMember": {
              "_id": "u103",
              "userName": "Urigruda",
              "fullName": "Uri Gruda",
              "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
            },
            "style": {
              "bgColor": "#e6574c",
              "isCover": true
            }
          }
        ]
      },
      {
        "id": "g102",
        "title": "Development",
        "archivedAt": null,
        "tasks": [
          {
            "id": "t109",
            "createdAt": 1653133011000,
            "archivedAt": null,
            "title": "Component building",
            "description": "Setting components up to fit component tree",
            "attachments": [
              {
                "id": "a102",
                "createdAt": 1653183411000,
                "fileUrl": "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687457/retina_1708x683_staging.toptal.net_javascript_emulating-react-jsx-in-vanilla-javascript-816eafe06505b888585d08474f2166e7.png"
              }
            ],
            "members": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer",
                "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l105",
              "l102",
              "l104"
            ],
            "dueDate": 1653696000000,
            "byMember": {
              "_id": "u102",
              "username": "Eranavichzer",
              "fullName": "Eran Avichzer",
              "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
            },
            "style": {}
          },
          {
            "id": "t102",
            "createdAt": 1653523200000,
            "archivedAt": null,
            "title": "Add Router and create routes",
            "description": "",
            "members": [
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l101",
              "l102"
            ],
            "byMember": {
              "_id": "u103",
              "userName": "Urigruda",
              "fullName": "Uri Gruda",
              "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
            },
            "style": {
              "bgColor": "\"#2579bd\"",
              "isCover": true
            }
          },
          {
            "id": "t1022227",
            "createdAt": 1653523200000,
            "archivedAt": null,
            "title": "npm Install",
            "members": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer",
                "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
              },
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l103"
            ],
            "dueDate": 1654214400000,
            "byMember": {
              "_id": "u101",
              "username": "Talofer",
              "fullName": "Tal Ofer",
              "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
            },
            "style": {
              "imgURL": "https://img.helpnetsecurity.com/wp-content/uploads/2021/11/17133051/npm-shield-1200-hns.jpg",
              "isCover": false
            },
            "description": "npm i"
          }
        ]
      },
      {
        "id": "g1032222",
        "title": "Style",
        "archivedAt": null,
        "tasks": [
          {
            "id": "t111",
            "createdAt": 1653133011000,
            "archivedAt": null,
            "title": "Get SCSS",
            "description": "",
            "checklists": [
              {
                "id": "c111",
                "title": "CSS to SCSS",
                "todos": [
                  {
                    "id": "t615",
                    "title": "install sass",
                    "isDone": true
                  },
                  {
                    "id": "t711",
                    "title": "refactor to scss",
                    "isDone": true
                  },
                  {
                    "id": "t712",
                    "title": "create main.scss",
                    "isDone": false
                  }
                ]
              },
              {
                "id": "c112",
                "title": "Styling",
                "todos": [
                  {
                    "id": "t815",
                    "title": "get inspiration",
                    "isDone": true
                  },
                  {
                    "id": "t811",
                    "title": "reset basics to your default",
                    "isDone": false
                  },
                  {
                    "id": "t713",
                    "title": "create mixins",
                    "isDone": true
                  }
                ]
              }
            ],
            "attachments": [
              {
                "id": "a202",
                "createdAt": 1653183411000,
                "fileUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png"
              }
            ],
            "memberIds": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer"
              }
            ],
            "labelIds": [
              "l101",
              "l102"
            ],
            "dueDate": 1653696000000,
            "byMember": {
              "_id": "u102",
              "username": "Eranavichzer",
              "fullName": "Eran Avichzer",
              "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
            },
            "style": {
              "}": ""
            }
          },
          {
            "id": "t208",
            "createdAt": 1653523200000,
            "archivedAt": null,
            "title": "Style meeting",
            "description": "Gather up and explore options",
            "members": [
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l105",
              "l102",
              "l104"
            ],
            "dueDate": 1654041600000,
            "byMember": {
              "_id": "u102",
              "username": "Eranavichzer",
              "fullName": "Eran Avichzer",
              "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
            },
            "style": {
              "bgColor": "#c374df",
              "isCover": false
            }
          }
        ]
      },
      {
        "id": "g103",
        "title": "Backend",
        "archivedAt": null,
        "tasks": [
          {
            "id": "t1109",
            "createdAt": 1643133011000,
            "archivedAt": null,
            "title": "Setup server",
            "description": "Behold, a task!",
            "attachments": [
              {
                "id": "a10112",
                "createdAt": 1643183411000,
                "fileUrl": "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687457/retina_1708x683_staging.toptal.net_javascript_emulating-react-jsx-in-vanilla-javascript-816eafe06505b888585d08474f2166e7.png"
              }
            ],
            "members": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer",
                "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l105",
              "l102",
              "l104"
            ],
            "dueDate": 1643696000000,
            "byMember": {
              "_id": "u102",
              "username": "Eranavichzer",
              "fullName": "Eran Avichzer",
              "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
            },
            "style": {}
          },
          {
            "id": "t10222",
            "createdAt": 1643523200000,
            "archivedAt": null,
            "title": "Get MongoDB",
            "description": "",
            "members": [
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l101",
              "l102"
            ],
            "byMember": {
              "_id": "u103",
              "userName": "Urigruda",
              "fullName": "Uri Gruda",
              "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
            },
            "style": {
              "imgURL": "https://g.foolcdn.com/art/companylogos/square/mdb.png",
              "isCover": true
            }
          },
          {
            "id": "t107",
            "createdAt": 1653523200000,
            "archivedAt": null,
            "title": "Create backend services",
            "members": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer",
                "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
              },
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l103"
            ],
            "dueDate": 1654214400000,
            "byMember": {
              "_id": "u101",
              "username": "Talofer",
              "fullName": "Tal Ofer",
              "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
            },
            "style": {
              "bgColor": "#63be53",
              "isCover": false
            },
            "description": ""
          }
        ]
      },
      {
        "id": "g10123",
        "title": "Done",
        "archivedAt": null,
        "tasks": [
          {
            "id": "t99101",
            "createdAt": 1653133011000,
            "archivedAt": null,
            "title": "A very important task",
            "description": "Attention! This task is very important",
            "checklists": [
              {
                "id": "c12201",
                "title": "A nice checklist",
                "todos": [
                  {
                    "id": "t51115",
                    "title": "A nice todo",
                    "isDone": true
                  },
                  {
                    "id": "t5222211",
                    "title": "There's a second one",
                    "isDone": false
                  },
                  {
                    "id": "t52222211",
                    "title": "And a third one",
                    "isDone": false
                  },
                  {
                    "id": "t52232211",
                    "title": "This one is my favorite",
                    "isDone": true
                  }
                ]
              },
              {
                "id": "c12222201",
                "title": "Some todos",
                "todos": [
                  {
                    "id": "t51sd115",
                    "title": "Hello World",
                    "isDone": true
                  },
                  {
                    "id": "t522sd2211",
                    "title": "ABCDEFGHIJKLMNOPQRSTUVWXYZ this is a very very very very very very looooooooooooooooooooooooooooooooooooooooong todo!!",
                    "isDone": true
                  },
                  {
                    "id": "t5222dd2211",
                    "title": "short",
                    "isDone": true
                  }
                ]
              }
            ],
            "attachments": [
              {
                "id": "a1we01",
                "createdAt": 1653183411000,
                "fileUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3IeeUtGb2ElOQTdNKsdxVUHNg0FigDXZcw&usqp=CAU"
              },
              {
                "id": "a1we33301",
                "createdAt": 1653183411000,
                "fileUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3IeeUtGb2ElOQTdNKsdxVUHNg0FigDXZcw&usqp=CAU"
              }
            ],
            "memberIds": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer"
              }
            ],
            "labelIds": [
              "l101",
              "l102"
            ],
            "dueDate": 1653696000000,
            "byMember": {
              "_id": "u102",
              "username": "Eranavichzer",
              "fullName": "Eran Avichzer",
              "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
            },
            "style": {
              "imgURL": "https://laughingsquid.com/wp-content/uploads/Hansoloprofilethumb.jpg",
              "isCover": true
            }
          },
          {
            "id": "t10fsdfssdf8",
            "createdAt": 1653523200000,
            "archivedAt": null,
            "title": "Do a very urgent thing",
            "description": "It is very urgent",
            "checklists": [
              {
                "id": "c10dfdsd2",
                "title": "Services",
                "todos": [
                  {
                    "id": "t51asd8",
                    "title": "util",
                    "isDone": true
                  },
                  {
                    "id": "t519asd",
                    "title": "board",
                    "isDone": false
                  }
                ]
              }
            ],
            "members": [
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l105",
              "l102",
              "l104"
            ],
            "dueDate": 1654041600000,
            "byMember": {
              "_id": "u102",
              "username": "Eranavichzer",
              "fullName": "Eran Avichzer",
              "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
            },
            "style": {
              "bgImg": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F2239403-right-here-right-now-neon-signs-style-text-vector&psig=AOvVaw39u7IYBKqDHWJjV-eGZjy-&ust=1653853913661000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjTm4r8gvgCFQAAAAAdAAAAABAN"
            }
          },
          {
            "id": "t1xs03",
            "createdAt": 1653523200000,
            "archivedAt": null,
            "title": "Mark something as done",
            "description": "I know it seems hard but do try.",
            "members": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer",
                "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
              },
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l103"
            ],
            "dueDate": 1654214400000,
            "byMember": {
              "_id": "u101",
              "username": "Talofer",
              "fullName": "Tal Ofer",
              "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
            },
            "style": {}
          },
          {
            "id": "t1czxczx04",
            "createdAt": 1653436800000,
            "archivedAt": null,
            "title": "Design a logo",
            "description": "Writing guidelines and plans",
            "members": [
              {
                "_id": "u101",
                "fullName": "Tal Ofer",
                "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
              },
              {
                "_id": "u102",
                "fullName": "Eran Avichzer",
                "imgURL": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
              },
              {
                "_id": "u103",
                "fullName": "Uri Gruda",
                "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
              }
            ],
            "labelIds": [
              "l103",
              "l101"
            ],
            "dueDate": 1653868800000,
            "byMember": {
              "_id": "u103",
              "userName": "Urigruda",
              "fullName": "Uri Gruda",
              "imgURL": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
            },
            "style": {
              "bgColor": "#e6574c",
              "isCover": true
            }
          }
        ]
      },
      {
        "id": "g1012234",
        "title": "Code helpers",
        "archivedAt": null,
        "tasks": []
      }
    ],
    "activities": [
      {
        "id": "a101",
        "txt": "Moved \"Create a logo\" to done",
        "createdAt": 1653214400000,
        "byMember": {
          "_id": "u101",
          "fullName": "Tal Ofer",
          "imgURL": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
        },
        "task": {
          "id": "t101",
          "title": "Cut 5 scenes to fit budget"
        }
      }
    ]
  }
)