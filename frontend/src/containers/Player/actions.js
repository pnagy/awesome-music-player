export const playTrack = track => dispatch => {
  dispatch({
    type: "PLAY_TRACK",
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
