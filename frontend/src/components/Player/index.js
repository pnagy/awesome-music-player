import React from "react"
import styled from "styled-components"
import Audio from "./Audio"
import Track from "./Track"
import Paper from "material-ui/Paper"

const Container = styled(Paper)`
  display: flex;
  margin: 15px;
  align-items: center;
`

const Player = ({ track, onPlay, onPause, source, isPaused }) => {
  return (
    <Container>
      <Track artist={track.artist} title={track.title} image={track.image} />
      <Audio source={source} isPaused={isPaused} onPlay={onPlay} onPause={onPause} />
    </Container>
  )
}

export default Player
