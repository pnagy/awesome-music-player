const getMetadata = require("./getMetadata")

describe("getMetadata", () => {
  it("should metadata", () => {
    return getMetadata({ artist: "Rancid", album: "Indestructible", year: 2003 }).then(result => {
      console.log(result)
    })
  })
})
