import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Error from "../../components/Error"
import * as displayActions from "./actions"
import MusicContainer from "../../components/MusicContainer"
import TrackList from "../../components/TrackList"
import Album from "../../components/Album"

const AlbumList = ({ isLoading, title, albums, onSelect }) => (
  <MusicContainer isLoading={isLoading} title={title}>
    {albums.map(album => {
      return (
        <Album
          artist={album.artist}
          title={album.album}
          key={album.name}
          image={album.image}
          onClick={() => onSelect(album)}
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
    this.props.actions.listAlbums("Rancid")
  }
  render() {
    const { display, actions } = this.props
    const isLoading = display.loadingState === "loading"
    if (display.error) return <Error error={display.error} />

    if (display.selected) {
      return (
        <AlbumView
          isLoading={isLoading}
          title={`Tracks from ${display.selected.album} by ${display.selected.artist}`}
          album={display.selected.album}
          artist={display.selected.artist}
          tracks={display.tracks}
          onPause={() => console.log("Playback paused")}
          onPlay={track => console.log("Playback started", track)}
        />
      )
    } else {
      return (
        <AlbumList
          isLoading={isLoading}
          title="Albums"
          albums={display.albums}
          onSelect={album => actions.selectAlbum(album)}
        />
      )
    }
  }
}

const mapStateToProps = ({ display }) => ({ display })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(displayActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Display)
