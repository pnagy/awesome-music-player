const { promisify } = require("util")
const path = require("path")
const fs = require("fs")
const readdir = promisify(fs.readdir)

const listAlbumDirectories = library => {
  const isDirectory = source => fs.lstatSync(source).isDirectory()
  return readdir(library).then(content =>
    content.map(name => path.join(library, name)).filter(isDirectory)
  )
}

const parseAlbumDir = (dir, library) => dir.replace(library + path.sep, "")

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

module.exports = musicLibraryPath => readMusicListFromDir(musicLibraryPath).then(parseAlbumList)
