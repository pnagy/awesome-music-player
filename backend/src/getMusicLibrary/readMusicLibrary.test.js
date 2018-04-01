const readMusicLibrary = require("./readMusicLibrary")

describe("parseMusicLibrary", () => {
  it("should return the parsed library", () => {
    readMusicLibrary(require("../config").LIBRARY_PATH).then(result => {
      console.log(result)
    })
  })
})
