const getMetadata = require("./getDiscogsMetadata")

describe("Getting Metadata", () => {
  it("should get it", () => {
    return getMetadata({ artist: "Rancid", album: "Indestructible", year: 2003 }).then(result => {
      console.log(result)
    })
  })
})
