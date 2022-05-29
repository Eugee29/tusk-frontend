
export const storageService = {
   query,
   get,
   post,
   put,
   remove,
   postMany,
   getTask
}

const board0 = {
   "_id": "b101",
   "title": "Building Tusk",
   "archivedAt": null,
   "createdAt": 1653046611000,
   "isStarred": true,
   "createdBy": {
      "_id": "u101",
      "fullName": "Tal Ofer",
      "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
   },
   "style": {
      "bgImg": "https://mages.edu.sg/wp-content/uploads/2021/02/Anatomy-of-a-full-stack-developer-Everything-you-need-to-know.jpg"
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
         "imgUrl": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
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
                  "imgUrl": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
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
                     "imgUrl": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
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
                  "imgUrl": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
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
                     "imgUrl": "https://i.pinimg.com/222x/33/75/d8/3375d8e988509961ae278462ed89c667.jpg"
                  },
                  {
                     "_id": "u103",
                     "fullName": "Uri Gruda",
                     "imgUrl": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
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
                  "imgUrl": "https://s.yimg.com/uu/api/res/1.2/UFrbnCxEMnNRJIEG2g3hIg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/latestly_557/7c791a28696b3b24b70c447c07b37226"
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
                  "imgUrl": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
               },
               "style": {
                  "imgUrl": "https://g.foolcdn.com/art/companylogos/square/mdb.png",
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
                     "fileUrl": "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-1/239639581_154146313528017_1108160682680780367_n.jpg?stp=dst-jpg_p148x148&_nc_cat=111&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=Zoz2N35CgGwAX-UZbX7&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT80YNeXzgs9ltxLwy8hW2eVAkpv9XYKzc9G3zXz2IXVtQ&oe=6297C6EB"
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
                  "imgUrl": "https://www.kindpng.com/picc/m/620-6209429_buff-garfield-hd-png-download.png"
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
   "isStarred": false,
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
   "isStarred": false,
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
   "isStarred": true,
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

function query(entityType) {
   var entities = JSON.parse(localStorage.getItem(entityType)) ||
      [
         board0,
         board2,
         board3,
         board4,
         board5,
         board6,
         board7,
         board8,
         board9,
         board10,
         board11,
      ]
   return Promise.resolve(entities)

   // return new Promise((resolve, reject) => {resolve(entities)})
}

function get(entityType, entityId) {
   return query(entityType)
      .then(entities => entities.find(entity => entity._id === entityId))
}

function getTask(entityType, entityId) {
   const board = ''
   return query(entityType)
      .then(entities => {
         return entities.find(entity => entity._id === entityId.boardId)
      }).then(board => {
         return board.groups.find(group => group.id === entityId.groupId)
      }).then(group => {
         return group.tasks.find(task => task.id === entityId.taskId)
      })
}

function post(entityType, newEntity) {
   newEntity._id = _makeId()
   return query(entityType)
      .then(entities => {
         entities.push(newEntity)
         _save(entityType, entities)
         return newEntity
      })
}

function put(entityType, updatedEntity) {
   return query(entityType)
      .then(entities => {
         const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
         entities.splice(idx, 1, updatedEntity)
         _save(entityType, entities)
         return updatedEntity
      })
}

function remove(entityType, entityId) {
   return query(entityType)
      .then(entities => {
         const idx = entities.findIndex(entity => entity._id === entityId)
         entities.splice(idx, 1)
         _save(entityType, entities)
      })
}

function _save(entityType, entities) {
   localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
   var text = ''
   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
   for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
   }
   return text
}

function postMany(entityType, newEntities) {
   return query(entityType)
      .then(entities => {
         newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
         entities.push(...newEntities)
         _save(entityType, entities)
         return entities
      })
}