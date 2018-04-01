export const listArtists = () => {
  return { type: "SERVER_LIST_MUSIC_LIBRARY" }
}

export const SELECT_ALBUM = "SELECT_ALBUM"
export const selectAlbum = album => dispatch => {
  dispatch({ type: SELECT_ALBUM, payload: album })
}
