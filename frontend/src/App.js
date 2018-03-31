import { connect } from "react-redux"
import React, { Component } from "react"
import AppBar from "./components/AppBar"

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar onSearch={text => console.log(text)} />
      </div>
    )
  }
}

const mapStateToProps = ({ connection }) => ({ connection })

const bindActionsToProps = dispatch => ({})

export default connect(mapStateToProps, bindActionsToProps)(App)
