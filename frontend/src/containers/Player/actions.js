export const playTrack = track => dispatch => {
  dispatch({
    type: "PLAY_TRACK",
    payload: track
  })
  dispatch({
    type: "SERVER_GET_TRACK_URL",
    payload: track
  })
}

export const continuePlayback = () => dispatch => {
  dispatch({
    type: "CONTINUE_PLAYBACK"
  })
}

export const pauseTrack = () => dispatch => {
  dispatch({
    type: "PAUSE_TRACK"
  })
}
