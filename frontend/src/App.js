import { connect } from "react-redux"
import React, { Component } from "react"

import AppBar from "./components/AppBar"
import Player from "./components/Player"

import Error from "./components/Error"
import Display from "./containers/Display"

class App extends Component {
  render() {
    const isErrorPage =
      this.props.connection.state === "error" || this.props.connection.state === "disconnected"
    return (
      <div className="app">
        <AppBar onSearch={text => console.log(text)} isSearchDisabled={true} />
        {isErrorPage ? (
          <Error error={this.props.connection.error || this.props.connection.state} />
        ) : (
          <div>
            <Player
              track={{ artist: "Rancid", title: "Arrested In Shanghai" }}
              image="https://img.discogs.com/1K9Z76MRqUFJnPBYvWYjHqqm20Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6761937-1431888584-3196.jpeg.jpg"
            />
            <Display />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ connection }) => ({ connection })

const bindActionsToProps = dispatch => ({})

export default connect(mapStateToProps, bindActionsToProps)(App)
