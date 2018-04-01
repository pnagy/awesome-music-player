import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PlayerElement from "../../components/Player"
import * as playerActions from "./actions"

class Player extends React.Component {
  render() {
    if (!this.props.player.source) return null
    return (
      <PlayerElement
        onPlay={this.props.actions.continuePlayback}
        onPause={this.props.actions.pauseTrack}
        source={this.props.player.source}
        track={this.props.player}
        isPaused={this.props.player.isPaused}
      />
    )
  }
}

const mapStateToProps = ({ player }) => ({ player })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(playerActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Player)
