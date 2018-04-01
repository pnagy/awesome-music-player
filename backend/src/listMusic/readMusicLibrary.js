const { promisify } = require("util")
const path = require("path")
const fs = require("fs")
const readdir = promisify(fs.readdir)

const listAlbumDirectories = library => {
  const musicDir = path.join(__dirname, library)
  const isDirectory = source => fs.lstatSync(source).isDirectory()
  return readdir(musicDir).then(content =>
    content.map(name => path.join(musicDir, name)).filter(isDirectory)
  )
}

const parseAlbumDir = (dir, library) => {
  const base = path.join(__dirname, library) + path.sep
  return dir.replace(base, "")
}

const readMusicListFromDir = libraryPath =>
  listAlbumDirectories(libraryPath).then(albumDirs =>
    albumDirs.map(dir => parseAlbumDir(dir, libraryPath))
  )

const processAlbumMachineName = machineName =>
  machineName.split("-").map(unit => unit.replace(/_/g, " "))

const parseAlbumList = albumList => {
  return albumList.map(rawAlbumText => {
    const [artist, album, year] = processAlbumMachineName(rawAlbumText)
    return { artist, album, year }
  })
}

module.exports = musicLibraryPath =>
  readMusicListFromDir(musicLibraryPath)
    .then(parseAlbumList)
    .catch(err => console.log(err))
