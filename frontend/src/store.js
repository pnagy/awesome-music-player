import { createStore, applyMiddleware, combineReducers } from "redux"
import thunkMiddleware from "redux-thunk"

import connectionReducer from "./connection/reducer"
import displayReducer from "./containers/Display/reducer"
import reduxLogger from "redux-logger"
import createSocketIoMiddleware from "redux-socket.io"
import { socket, setSocketBasicActions, SERVER_ACTION_PREFIX } from "./connection/socket"

const rootReducer = combineReducers({ connection: connectionReducer, display: displayReducer })

const defaultStore = (options, initialState = {}) => {
  let middleWares = [
    thunkMiddleware,
    createSocketIoMiddleware(socket, SERVER_ACTION_PREFIX),
    reduxLogger
  ]
  const store = createStore(rootReducer, initialState, applyMiddleware(...middleWares))

  setSocketBasicActions(socket, store)

  return store
}

export default defaultStore()
