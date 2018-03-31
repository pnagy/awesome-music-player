import React, { Component } from "react"
import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="connection-state">{this.props.connection.state}</div>
        <div className="connection-lastMessage">
          {JSON.stringify(this.props.connection.lastMessage)}
        </div>
        <div className="something">Yay!</div>
      </div>
    )
  }
}

const mapStateToProps = ({ connection }) => ({ connection })

const bindActionsToProps = dispatch => ({})

export default connect(mapStateToProps, bindActionsToProps)(App)
