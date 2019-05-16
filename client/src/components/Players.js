import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions/players'
import PlayerCard from '../components/PlayerCard'

class Players extends Component {
  componentDidMount() {
    this.props.fetchPlayers()
  }

  render() {
    const { players } = this.props

    return (
      <div>
      { console.log("Players: ", players) }
      {this.props.players.map((player, index) => <PlayerCard
        player={player}
        key={index}
      />)}
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlayers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Players)
