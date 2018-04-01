const { DOMAIN } = require("../config")
const { escape } = require("querystring")

const getAlbumDirName = (artist, album, year) => `${artist}-${album}-${year}`.replace(/\s/g, "_")

const getStaticFileUrl = (dir, position) => `http://${DOMAIN}/${escape(dir)}/${position}.mp3`

module.exports = ({ artist, album, year, position }) => {
  return Promise.resolve(getStaticFileUrl(getAlbumDirName(artist, album, year), position))
}
