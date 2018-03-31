import { createStore, applyMiddleware, combineReducers } from "redux"

import connectionReducer from "./connection/reducer"
import reduxLogger from "redux-logger"
import createSocketIoMiddleware from "redux-socket.io"
import { socket, setSocketBasicActions, SERVER_ACTION_PREFIX } from "./connection/socket"

const rootReducer = combineReducers({ connection: connectionReducer })

const defaultStore = (options, initialState = {}) => {
  let middleWares = [createSocketIoMiddleware(socket, SERVER_ACTION_PREFIX), reduxLogger]
  const store = createStore(rootReducer, initialState, applyMiddleware(...middleWares))

  setSocketBasicActions(socket, store)

  return store
}

export default defaultStore()
