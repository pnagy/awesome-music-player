import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Error from "../../components/Error"
import * as displayActions from "./actions"
import MusicContainer from "../../components/MusicContainer"
import TrackList from "../../components/TrackList"
import Album from "../../components/Album"
import Artist from "../../components/Artist"

const ArtistList = ({ isLoading, title, artists, onSelect }) => (
  <MusicContainer isLoading={isLoading} title={title}>
    {artists.map(artist => {
      return (
        <Artist
          name={artist.name}
          key={artist.name}
          image={artist.image}
          onClick={() => onSelect(artist.name)}
        />
      )
    })}
  </MusicContainer>
)

const ArtistView = ({ isLoading, title, albums, onSelect }) => (
  <MusicContainer isLoading={isLoading} title={title}>
    {albums.map(album => {
      return (
        <Artist
          name={album.name}
          key={album.name}
          image={album.image}
          onClick={() => onSelect(album.name)}
        />
      )
    })}
  </MusicContainer>
)

const AlbumView = ({ isLoading, title, album, artist, tracks, onPause, onPlay }) => (
  <MusicContainer isLoading={isLoading} title={`Tracks of ${album} by ${artist}`}>
    <TrackList tracks={tracks} onPause={onPause} onPlay={onPlay} />
  </MusicContainer>
)

class Display extends React.Component {
  componentDidMount() {
    this.props.actions.listArtists("Rancid")
  }
  render() {
    const { display, actions } = this.props
    const isLoading = display.loadingState === "loading"
    if (display.error) return <Error error={display.error} />

    if (display.selected.artist && display.selected.album) {
      return (
        <AlbumView
          isLoading={isLoading}
          title={`Tracks from ${display.selected.album} by ${display.selected.artist}`}
          album={display.selected.album}
          artist={display.selected.artist}
          tracks={display.entries}
          onPause={() => console.log("Playback paused")}
          onPlay={track => console.log("Playback started", track)}
        />
      )
    }

    if (display.selected.artist && !display.selected.album) {
      return (
        <ArtistView
          isLoading={isLoading}
          title={`Albums of ${display.selected.artist}`}
          albums={display.entries}
          onSelect={album => actions.selectAlbum(display.selected.artist, album)}
        />
      )
    }

    return (
      <ArtistList
        isLoading={isLoading}
        title="Artists"
        artists={display.entries}
        onSelect={artist => actions.selectArtist(artist)}
      />
    )
  }
}

const mapStateToProps = ({ display }) => ({ display })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(displayActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Display)
