module.exports = (dispatch, action) => {
  switch (action.type) {
    case "SERVER_GREETINGS":
      return Promise.resolve(
        dispatch({
          type: "GREETINGS",
          payload: "Hey, client!"
        })
      )
    case "SERVER_LIST_MUSIC_LIBRARY":
      return require("./getMusicLibrary")()
        .then(music => {
          return {
            type: "REPLY_LIST_MUSIC_LIBRARY",
            payload: music
          }
        })
        .catch(err => {
          const errorMsg = "Cannot get music library"
          console.error(errorMsg, err)
          return {
            type: "ERROR_LIST_MUSIC_LIBRARY",
            payload: errorMsg
          }
        })
    case "SERVER_GET_TRACK_URL":
      return require("./getTrackUrl")(action.payload)
        .then(url => {
          return {
            type: "REPLY_GET_TRACK_URL",
            payload: url
          }
        })
        .catch(err => {
          const errorMsg = "Cannot get music library"
          console.error(errorMsg, err)
          return {
            type: "ERROR_GET_TRACK_URL",
            payload: errorMsg
          }
        })
    default:
      return Promise.resolve({
        type: "UNSUPPORTED_ACTION",
        error: `Action '${action.type}' not supported by this server`
      })
  }
}
