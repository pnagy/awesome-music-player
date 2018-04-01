const config = require("../config")
const readMusicLibrary = require("./readMusicLibrary")
const getDiscogsMetadata = require("./getDiscogsMetadata")

module.exports = () => {
  readMusicLibrary(config.LIBRARY_PATH).then(albums => Promise.all(albums.map(getDiscogsMetadata)))
}
