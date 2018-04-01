const config = require("../config")
const readMusicLibrary = require("./readMusicLibrary")
const getMetadata = require("./getMetadata")

module.exports = () => {
  readMusicLibrary(config.LIBRARY_PATH).then(albums => Promise.all(albums.map(getMetadata)))
}
