// const { createStore, applyMiddleware, combineReducers, compose } = Redux
// const thunk = ReduxThunk.default

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { boardReducer } from './board/board.reducer.js'
import { boardBackReducer } from './board/board-back.reducer.js'
import { appReducer } from './app/app.reducer.js'
// import {activityReducer} from './activity/activity.reducer.js'

// import { userReducer } from './user.reducer.js'
// import { reviewReducer } from './review.reducer'
// import { systemReducer } from './system.reducer'

const rootReducer = combineReducers({
  boardModule: boardReducer,
  boardBackModule: boardBackReducer,
  appModule: appReducer,
  // activityModule: activityReducer
  //  userModule: userReducer,
  //  systemModule: systemReducer,
  //  reviewModule: reviewReducer,
})


// export const store = createStore(rootReducer, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// Lets wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// export const store = createStore(rootReducer, applyMiddleware(thunk))
