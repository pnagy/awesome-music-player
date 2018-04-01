const initialState = {
  selected: null,
  albums: [],
  tracks: [],
  error: null,
  loadingState: "initial"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SERVER_LIST_MUSIC_LIBRARY":
      return { ...state, loadingState: "loading" }
    case "REPLY_LIST_MUSIC_LIBRARY":
      return {
        ...state,
        loadingState: "done",
        albums: action.payload.filter(album => album),
        error: null
      }
    case "ERROR_LIST_MUSIC_LIBRARY":
      return { ...state, loadingState: "error", error: action.payload }
    case "SELECT_ALBUM":
      return {
        ...state,
        selected: {
          image: action.payload.image,
          artist: action.payload.artist,
          album: action.payload.album,
          year: action.payload.year
        },
        tracks: action.payload.tracks
      }
    case "CLEAR_ALBUM_SELECTION":
      return {
        ...state,
        selected: null,
        tracks: null
      }
    case "WS_CONNECTED":
      return initialState
    default:
      return state
  }
}
