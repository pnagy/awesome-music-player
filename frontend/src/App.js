import { connect } from "react-redux"
import React, { Component } from "react"

import AppBar from "./components/AppBar"

import Error from "./components/Error"
import Display from "./containers/Display"
import Player from "./containers/Player"

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
            <Player />
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
