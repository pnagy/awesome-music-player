import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Error from "../../components/Error"
import * as displayActions from "./actions"
import * as playerActions from "../Player/actions"
import MusicContainer from "../../components/MusicContainer"
import TrackList from "../../components/TrackList"
import Album from "../../components/Album"

const AlbumList = ({ isLoading, albums, onSelect }) => (
  <MusicContainer isLoading={isLoading} title={"Albums"}>
    {albums.map(album => {
      return (
        <Album
          key={`${album.artist}-${album.album}`}
          artist={album.artist}
          title={album.album}
          image={album.image}
          onClick={() => onSelect(album)}
        />
      )
    })}
  </MusicContainer>
)

const AlbumView = ({
  isLoading,
  title,
  artist,
  tracks,
  onPause,
  onPlay,
  currentlyPlayingTrack,
  onBackClick,
  backLabel
}) => (
  <MusicContainer
    isLoading={isLoading}
    title={title}
    onBackClick={onBackClick}
    backLabel="Back to albums"
  >
    <TrackList
      artist={artist}
      tracks={tracks}
      currentlyPlayingTrack={currentlyPlayingTrack}
      onPause={onPause}
      onPlay={onPlay}
    />
  </MusicContainer>
)

class Display extends React.Component {
  componentDidMount() {
    this.props.actions.display.listAlbums("Rancid")
  }
  render() {
    const { display, actions, player } = this.props
    const isLoading = display.loadingState === "loading"
    if (display.error) return <Error error={display.error} />

    if (display.selected) {
      return (
        <AlbumView
          isLoading={isLoading}
          title={`${display.selected.artist} - ${display.selected.album}`}
          album={display.selected.album}
          artist={display.selected.artist}
          tracks={display.tracks}
          onPause={this.props.actions.player.pauseTrack}
          onPlay={track =>
            this.props.actions.player.playTrack({
              ...display.selected,
              title: track.title,
              position: display.tracks.findIndex(song => song.title === track.title) + 1
            })
          }
          currentlyPlayingTrack={!player.isPaused ? `${player.artist}-${player.title}` : null}
          onBackClick={actions.display.clearAlbumSelection}
        />
      )
    } else {
      return (
        <AlbumList
          isLoading={isLoading}
          albums={display.albums}
          onSelect={album => actions.display.selectAlbum(album)}
        />
      )
    }
  }
}

const mapStateToProps = ({ display, player }) => ({ display, player })
const mapDispatchToProps = dispatch => ({
  actions: {
    display: bindActionCreators(displayActions, dispatch),
    player: bindActionCreators(playerActions, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Display)
