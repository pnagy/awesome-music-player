import { connect } from "react-redux"
import React, { Component } from "react"
import MusicContainer from "./components/MusicContainer"
import AppBar from "./components/AppBar"

import Album from "./components/Album"
import Artist from "./components/Artist"
import TrackList from "./components/TrackList"
class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar onSearch={text => console.log(text)} />
        <MusicContainer title="Albums">
          <Album
            artist="Rancid"
            title="Indestructible"
            image="https://img.discogs.com/1K9Z76MRqUFJnPBYvWYjHqqm20Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6761937-1431888584-3196.jpeg.jpg"
          />
          <Album
            artist="Rancid"
            title="Indestructible"
            image="https://img.discogs.com/1K9Z76MRqUFJnPBYvWYjHqqm20Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6761937-1431888584-3196.jpeg.jpg"
          />
          <Album
            artist="Rancid"
            title="Indestructible"
            image="https://img.discogs.com/1K9Z76MRqUFJnPBYvWYjHqqm20Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6761937-1431888584-3196.jpeg.jpg"
          />
        </MusicContainer>
        <MusicContainer title="Artists">
          <Artist
            artist="Rancid"
            image="https://img.discogs.com/WwCTP-9Mj9yCc2GN7UrwyGAJkNk=/434x414/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-253307-1187831757.jpeg.jpg"
          />
        </MusicContainer>
        <MusicContainer title="Tracks">
          <TrackList
            tracks={[
              { duration: "2:44", position: "A4", artist: "Rancid", title: "David Courtney" },
              { duration: "3:05", position: "A5", artist: "Rancid", title: "Start Now" },
              {
                duration: "1:41",
                position: "B1",
                artist: "Rancid",
                title: "Out Of Control",
                isPlaying: true
              },
              { duration: "2:25", position: "B2", artist: "Rancid", title: "Django" },
              { duration: "4:11", position: "B3", artist: "Rancid", title: "Arrested In Shanghai" },
              { duration: "2:16", position: "B4", artist: "Rancid", title: "Travis Bickle" }
            ]}
            onPlay={track => console.log("Song started: ", track)}
            onPause={track => console.log("Pause")}
          />
        </MusicContainer>
      </div>
    )
  }
}

const mapStateToProps = ({ connection }) => ({ connection })

const bindActionsToProps = dispatch => ({})

export default connect(mapStateToProps, bindActionsToProps)(App)
