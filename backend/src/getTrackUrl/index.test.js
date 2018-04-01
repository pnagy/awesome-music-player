const getTrackUrl = require("./index")
const { DOMAIN } = require("../config")

describe("getTrackUrl", () => {
  it("should return the dir string if everything's ok", () => {
    const payload = {
      artist: "Metallica",
      album: "Ride the Lightning",
      year: 1984,
      position: 4
    }
    expect(getTrackUrl(payload)).resolves.toEqual(
      `http://${DOMAIN}/Metallica-Ride_the_Lightning-1984/4.mp3`
    )
  })
  it("should return the dir string even if it has a question mark", () => {
    const payload = {
      album: "How Could Hell Be Any Worse?",
      artist: "Bad Religion",
      position: 11,
      title: "Eat Your Dog",
      year: 1982
    }
    expect(getTrackUrl(payload)).resolves.toEqual(
      `http://${DOMAIN}/Bad_Religion-How_Could_Hell_Be_Any_Worse%3F-1982/11.mp3`
    )
  })
})
