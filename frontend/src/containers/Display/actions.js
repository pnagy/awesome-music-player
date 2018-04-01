export const listAlbums = () => {
  return { type: "SERVER_LIST_MUSIC_LIBRARY" }
}

export const selectAlbum = album => dispatch => {
  dispatch({ type: "SELECT_ALBUM", payload: album })
}

export const clearAlbumSelection = () => {
  return { type: "CLEAR_ALBUM_SELECTION" }
}
