const initialState = {
  selected: {
    artist: null,
    album: null
  },
  entries: [],
  error: null,
  loadingState: "initial"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SERVER_LIST_ARTISTS":
      return { ...state, loadingState: "loading" }
    case "REPLY_SERVER_LIST_ARTISTS":
      return { ...state, loadingState: "done", entries: action.payload.artists }
    case "ERROR_SERVER_LIST_ARTISTS":
      return { ...state, loadingState: "error", error: action.payload }
    case "SELECT_ARTIST":
      return { ...state, selected: { artist: action.payload.artist, album: null }, entries: [] }
    case "SERVER_LIST_ALBUMS":
      return { ...state, loadingState: "loading" }
    case "REPLY_SERVER_LIST_ALBUMS":
      return { ...state, loadingState: "done", entries: action.payload.albums }
    case "ERROR_SERVER_LIST_ALBUMS":
      return { ...state, loadingState: "error", error: action.payload }

    default:
      return state
  }
}
