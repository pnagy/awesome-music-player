const initialState = {
  source: null,
  artist: null,
  title: null,
  image: null,
  isPaused: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_TRACK":
      return {
        ...state,
        artist: action.payload.artist,
        title: action.payload.title,
        image: action.payload.image
      }
    case "PAUSE_TRACK":
      return {
        ...state,
        isPaused: true
      }
    case "CONTINUE_PLAYBACK":
      return {
        ...state,
        isPaused: false
      }
    case "REPLY_GET_TRACK_URL":
      return { ...state, source: action.payload, isPaused: false }
    case "WS_CONNECTED":
      return initialState
    default:
      return state
  }
}
