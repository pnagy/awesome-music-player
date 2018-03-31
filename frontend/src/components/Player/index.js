import React from "react"
import styled from "styled-components"
import Paper from "material-ui/Paper"
import AudioPlayer from "react-audio-player"

const Container = styled(Paper)`
  display: flex;
  margin: 15px;
  align-items: center;
`

const TrackInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TrackTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`
const TrackImage = styled.div`
  width: 60px;
  height: auto;
  margin: 20px;
  img {
    width: 100%;
  }
`

const TrackArtist = styled.div`
  font-size: 12px;
`

const TrackContainer = styled.div`
  display: flex;
`

const Track = ({ artist, title, image }) => {
  return (
    <TrackContainer>
      <TrackImage>
        <img src={image} alt="" />
      </TrackImage>
      <TrackInfoContainer>
        <TrackTitle>{title}</TrackTitle>
        <TrackArtist>{artist}</TrackArtist>
      </TrackInfoContainer>
    </TrackContainer>
  )
}

const StyledAudioPlayer = styled(AudioPlayer)`
  min-width: 500px;
  margin: 0px 25px;
`

const Audio = ({ source, isPaused }) => {
  const handlePlayback = player => {
    const audioElement = player ? player.audioEl || null : null
    return audioElement ? (isPaused ? audioElement.pause() : audioElement.play()) : null
  }
  return (
    <StyledAudioPlayer
      controls
      onPlay={() => {
        console.log("play")
      }}
      onPause={() => {
        console.log("pause")
      }}
      innerRef={handlePlayback}
      src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
    />
  )
}

const Player = ({ track, image, onPlay, onPause }) => {
  return (
    <Container>
      <Track artist={track.artist} title={track.title} image={image} />
      <Audio source={track.source} isPaused={true} />
    </Container>
  )
}

export default Player
