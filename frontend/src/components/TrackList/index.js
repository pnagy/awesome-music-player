import React from "react"
import styled from "styled-components"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table"
import IconButton from "material-ui/IconButton"
import PlayIcon from "material-ui/svg-icons/av/play-circle-outline"
import PauseIcon from "material-ui/svg-icons/av/pause-circle-outline"

const StyledTable = styled(Table)`
  max-width: 800px;
`

const PlayButton = ({ onClick }) => (
  <IconButton tooltip="Play" onClick={onClick}>
    <PlayIcon />
  </IconButton>
)
const PauseButton = ({ onClick }) => (
  <IconButton tooltip="Pause" onClick={onClick}>
    <PauseIcon />
  </IconButton>
)

const SmallHeaderColumn = styled(TableHeaderColumn)`
  width: 35px;
`
const SmallColumn = styled(TableRowColumn)`
  width: 35px;
`

const TrackList = ({ artist, currentlyPlayingTrack, image, tracks, onPlay, onPause }) => (
  <StyledTable selectable={false} multiSelectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
      <TableRow>
        <SmallHeaderColumn />
        <SmallHeaderColumn>#</SmallHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Artist</TableHeaderColumn>
        <SmallHeaderColumn>Duration</SmallHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {tracks.map(track => (
        <TableRow
          key={track.position}
          hovered={currentlyPlayingTrack === `${artist}-${track.title}`}
        >
          <SmallColumn style={{ width: "40px" }}>
            {currentlyPlayingTrack === `${artist}-${track.title}` ? (
              <PauseButton onClick={() => onPause()} />
            ) : (
              <PlayButton onClick={() => onPlay({ ...track, artist, image })} />
            )}
          </SmallColumn>
          <SmallColumn>{track.position}</SmallColumn>
          <TableRowColumn>{track.title}</TableRowColumn>
          <TableRowColumn>{artist}</TableRowColumn>
          <SmallColumn>{track.duration || "N/A"}</SmallColumn>
        </TableRow>
      ))}
    </TableBody>
  </StyledTable>
)

export default TrackList
