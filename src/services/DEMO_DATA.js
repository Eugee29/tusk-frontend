const board1 = {
   "_id": "b101",
   "title": "Getting Things Done",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": true,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2390x1600/1eca547ad0647a7de47fbb5e37bf30fc/photo-1545897398-2aba891843b6.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board2 = {
   "_id": "b102",
   "title": "Planning Your Day",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": true,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x1920/6050bf159b3284fab6b86983f7a11186/photo-1608335688606-411d1e0f20f5.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board3 = {
   "_id": "b103",
   "title": "Productivity Workflow",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": true,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/5191197f9433cf5507006338/960x960/1a274e52a283fd73c5756a8f959c93b6/ProductivityBackground2.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board4 = {
   "_id": "b104",
   "title": "Marc Andreesen Productivity System",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": true,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2397x1600/670994a7c09238254177254e8f8d1d4a/photo-1518331483807-f6adb0e1ad23.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board5 = {
   "_id": "b105",
   "title": "Daily Task Management",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": true,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/b50115e302bd82e4e556ce43909ffb4d/photo-1589932527534-77a1546ac3e5.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board6 = {
   "_id": "b106",
   "title": "Change Management Workflow Tool",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": false,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x1920/14d6b02e5d05c094bd0efc5fadbc9a1f/photo-1588907395850-0bbefa3b1c80.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board7 = {
   "_id": "b107",
   "title": "Product Roadmap Template",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": false,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x2048/27eaf2ea690e8682d79f136a72350952/photo-1461183479101-6c14cd5299c4.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board8 = {
   "_id": "b108",
   "title": "Timed Effort Planner",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": false,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2397x1600/3a89c689f6adfd2136b580dd4fb7a19d/photo-1533090161767-e6ffed986c88.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board9 = {
   "_id": "b109",
   "title": "Life Watchers 2020",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": false,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2401x1600/3ec9b90c95f9c9ce4daa0a477a8ceca8/photo-1578403414495-5bb49bf9447b.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board10 = {
   "_id": "b110",
   "title": "Productivity System",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": false,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2398x1600/ee1213d4523f824644302fad00145dbb/photo-1494947665470-20322015e3a8.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}
const board11 = {
   "_id": "b111",
   "title": "Personal Productivity System",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": false,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2397x1600/09074ade5bff1456ea55337903851c92/photo-1523266092241-0077129f31fe.jpg"
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
         "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
      },
      {
         "_id": "u102",
         "fullName": "Eran Avichzer",
         "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
      },
      {
         "_id": "u103",
         "fullName": "Uri Gruda",
         "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://48hills.org/wp-content/uploads/2021/03/Buff-Garfield.jpg"
               },
               "style": {
                  "bgColor": "#2579bd",
                  "isCover": true
               }
            },
            {
               "id": "t107",
               "createdAt": 1653523200000,
               "archivedAt": null,
               "title": "npm Install",
               "members": [
                  {
                     "_id": "u101",
                     "fullName": "Tal Ofer",
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u102",
                     "fullName": "Eran Avichzer",
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
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
         "id": "g103",
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                     "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
               },
               "style": {
                  "bgColor": "#c374df",
                  "isCover": false
               }
            }
         ]
      }
   ],
   "activities": [
      {
         "id": "a501",
         "txt": "Add comment",
         "createdAt": 1653214400000,
         "byMember": {
            "_id": "u101",
            "fullName": "Tal Ofer",
            "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
         },
         "task": {
            "id": "t101",
            "title": "Cut 5 scenes to fit budget"
         }
      }
   ]
}


// storageService.post(STORAGE_KEY, board1)
// storageService.post(STORAGE_KEY, board2)
// storageService.post(STORAGE_KEY, board3)
// storageService.post(STORAGE_KEY, board4)
// storageService.post(STORAGE_KEY, board5)
// storageService.post(STORAGE_KEY, board6)
// storageService.post(STORAGE_KEY, board7)
// storageService.post(STORAGE_KEY, board8)
// storageService.post(STORAGE_KEY, board9)
// storageService.post(STORAGE_KEY, board10)
// storageService.post(STORAGE_KEY, board11)
