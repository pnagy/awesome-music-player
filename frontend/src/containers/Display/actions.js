export const listArtists = () => {
  return { type: "SERVER_LIST_ARTISTS" }
}

export const SELECT_ARTIST = "SELECT_ARTIST"
export const selectArtist = artist => dispatch => {
  dispatch({ type: "SERVER_LIST_ALBUMS", payload: { artist } })
  dispatch({ type: SELECT_ARTIST, payload: { artist } })
}

export const SELECT_ALBUM = "SELECT_ALBUM"
export const selectAlbum = (artist, album) => dispatch => {
  dispatch({ type: "SERVER_LIST_TRACKS", payload: { artist, album } })
  return { type: SELECT_ALBUM, payload: { artist, album } }
}
