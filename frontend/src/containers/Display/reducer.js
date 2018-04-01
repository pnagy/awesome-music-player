const initialState = {
  selected: null,
  albums: [],
  tracks: null,
  error: null,
  loadingState: "initial"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SERVER_LIST_MUSIC_LIBRARY":
      return { ...state, loadingState: "loading" }
    case "REPLY_LIST_MUSIC_LIBRARY":
      return { ...state, loadingState: "done", albums: action.payload }
    case "ERROR_LIST_MUSIC_LIBRARY":
      return { ...state, loadingState: "error", error: action.payload }
    case "SELECT_ALBUM":
      return {
        ...state,
        selected: { artist: action.payload.artist, album: action.payload.album },
        tracks: action.payload.tracks
      }
    case "CLEAR_ALBUM_SELECTION":
      return {
        ...state,
        selected: null,
        tracks: null
      }

    default:
      return state
  }
}
