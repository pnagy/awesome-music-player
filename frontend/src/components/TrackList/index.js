import React from "react"
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

const TrackList = ({ tracks, onPlay, onPause }) => (
  <Table selectable={false} multiSelectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn />
        <TableHeaderColumn>#</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Artist</TableHeaderColumn>
        <TableHeaderColumn>Duration</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {tracks.map(track => (
        <TableRow key={track.position} hovered={track.isPlaying}>
          <TableRowColumn>
            {track.isPlaying ? (
              <PauseButton onClick={() => onPause()} />
            ) : (
              <PlayButton onClick={() => onPlay(track)} />
            )}
          </TableRowColumn>
          <TableRowColumn>{track.position}</TableRowColumn>
          <TableRowColumn>{track.title}</TableRowColumn>
          <TableRowColumn>{track.artist}</TableRowColumn>
          <TableRowColumn>{track.duration}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

export default TrackList
