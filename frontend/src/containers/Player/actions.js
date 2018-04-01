export const playTrack = track => dispatch => {
  dispatch({
    type: "PLAY_TRACK",
    payload: track
  })
  dispatch({
    type: "SERVER_GET_TRACK_URL",
    payload: { artist: track.artist, album: track.album, position: track.position }
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
