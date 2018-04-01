import React from "react"
import styled from "styled-components"
import AudioPlayer from "react-audio-player"

const StyledAudioPlayer = styled(AudioPlayer)`
  min-width: 500px;
  margin: 0px 25px;
`

export default ({ source, isPaused, onPlay, onPause }) => {
  const handlePlayback = player => {
    const audioElement = player ? player.audioEl || null : null
    return audioElement ? (isPaused ? audioElement.pause() : audioElement.play()) : null
  }
  return (
    <StyledAudioPlayer
      controls
      onPlay={onPlay}
      onPause={onPause}
      innerRef={handlePlayback}
      src={source}
    />
  )
}
