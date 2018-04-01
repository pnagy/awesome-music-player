import React from "react"
import styled from "styled-components"

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

export default ({ artist, title, image }) => {
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
