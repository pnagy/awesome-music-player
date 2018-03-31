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
