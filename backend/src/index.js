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
const dispatcher = require("./dispatcher")

io.on("connection", socket => {
  console.log("Client connected")

  const dispatch = action => socket.emit("action", action)

  socket.on("action", action => {
    console.log("Incoming action", action)

    dispatcher(dispatch, action)
      .then(reply => dispatch(reply))
      .catch(err => {
        console.error("Failed to process action", err)
      })
  })
})

app.listen(APP_PORT, APP_HOST)
console.log(`listening on http://${APP_HOST}:${APP_PORT}`)
