const initialState = {
  state: "disconnected",
  lastMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "WS_CONNECTED":
      return {
        ...state,
        state: "connected"
      }
    case "WS_DISCONNECTED":
      return {
        ...state,
        state: "disconnected"
      }
    case "WS_FAILED":
      return {
        ...state,
        state: "failed"
      }
    case "WS_EVENT":
      return {
        ...state,
        lastMessage: action.payload
      }
    default:
      return { ...state }
  }
}
