const { APP_PORT, APP_HOST, LIBRARY_PATH } = require("./config")
const finalhandler = require("finalhandler")
const serveStatic = require("serve-static")

const serve = serveStatic(LIBRARY_PATH)
const handler = (req, res) => {
  var done = finalhandler(req, res)
  serve(req, res, done)
}
const app = require("http").createServer(handler)
const io = require("socket.io")(app)

const handleAction = (dispatch, action) => {
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

io.on("connection", socket => {
  console.log("Client connected")

  const dispatch = action => socket.emit("action", action)

  socket.on("action", action => {
    console.log("Incoming action", action)

    handleAction(dispatch, action)
      .then(reply => dispatch(reply))
      .catch(err => {
        console.error("Failed to process action", err)
      })
  })
})

app.listen(APP_PORT, APP_HOST)
console.log(`listening on http://${APP_HOST}:${APP_PORT}`)
