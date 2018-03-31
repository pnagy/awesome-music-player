import io from "socket.io-client"

const ADDRESS = "http://localhost:7000"
export const SERVER_ACTION_PREFIX = "SERVER_"

export const socket = io(ADDRESS)

export const setSocketBasicActions = (socket, store) => {
  socket.on("connect", () => {
    store.dispatch({ type: "WS_CONNECTED" })
    store.dispatch({ type: "SERVER_GREETINGS", payload: "Hola, server!" })
  })

  socket.on("disconnect", () => {
    store.dispatch({ type: "WS_DISCONNECTED" })
  })

  socket.on("action", event => {
    console.log(event)

    store.dispatch({ type: "WS_EVENT", payload: event })
  })

  socket.on("connect_error", error => {
    store.dispatch({ type: "WS_ERROR" })
  })
}
