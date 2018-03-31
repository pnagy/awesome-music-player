const { APP_PORT, APP_HOST } = require("./config")

const handler = (req, res) => {
  res.writeHead("404")
  console.log("Received non-socket io connection")
  return res.end(`This is not the server you are looking for.`)
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
      break
    case "SERVER_LIST_ARTISTS":
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            dispatch({
              type: "REPLY_SERVER_LIST_ARTISTS",
              payload: {
                artists: [
                  {
                    name: "Rancid",
                    image:
                      "https://img.discogs.com/WwCTP-9Mj9yCc2GN7UrwyGAJkNk=/434x414/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-253307-1187831757.jpeg.jpg"
                  },
                  {
                    name: "Madness",
                    image:
                      "https://img.discogs.com/WwCTP-9Mj9yCc2GN7UrwyGAJkNk=/434x414/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-253307-1187831757.jpeg.jpg"
                  }
                ]
              }
            })
          )
        }, 2000)
      })
      break
    default:
      return Promise.resolve(
        dispatch({
          type: "UNSUPPORTED_ACTION",
          error: `Action '${action.type}' not supported by this server`
        })
      )
  }
}

io.on("connection", socket => {
  console.log("Client connected")

  const dispatch = action => socket.emit("action", action)

  socket.on("action", action => {
    console.log("Incoming action", action)

    handleAction(dispatch, action).catch(err => {
      console.error("Failed to process action", err)
    })
  })
})

app.listen(APP_PORT, APP_HOST)
console.log(`listening on http://${APP_HOST}:${APP_PORT}`)
