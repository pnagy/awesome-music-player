const fetch = require("isomorphic-fetch")
const querystring = require("querystring")
const config = require("../config")
const _ = require("lodash")

const sendMetadataRequest = url => {
  const options = {
    headers: {
      Authorization: config.DISCOGS_AUTH,
      "Content-Type": "application/json"
    },
    method: "GET"
  }
  return fetch(url, options)
}

const searchForAlbum = params => {
  const url = "https://api.discogs.com/database/search?" + querystring.stringify(params)
  return sendMetadataRequest(url).then(res => res.json())
}

const loadReleaseInfo = searchResults => {
  const url = searchResults[0].resource_url
  return sendMetadataRequest(url).then(res => res.json())
}

const preparePrettyObject = rawResponse => {
  return {
    artist: rawResponse.artists[0].name,
    album: rawResponse.title,
    tracks: rawResponse.tracklist.map(track => _.omit(track, "type_")),
    image: rawResponse.images.filter(image => image.type === "primary")[0]
  }
}

module.exports = ({ artist, album, year }) => {
  const params = {
    artist,
    year,
    title: album,
    type: "release",
    country: "US"
  }
  return searchForAlbum(params)
    .then(data => loadReleaseInfo(data.results))
    .then(preparePrettyObject)
    .catch(err => console.log(err))
}
