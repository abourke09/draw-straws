import React, { Component } from 'react'
import { connect } from 'react-redux';
import PlayerCard from '../components/PlayerCard'
import CardDeck from 'react-bootstrap/CardDeck'

class Players extends Component {

  render() {

    return (
      <CardDeck style = { {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' } }>
        {this.props.players.map((player) =>
          <PlayerCard player={player} key={player.id} />
        )}
      </CardDeck>
      );
  }
}



const mapStateToProps = (state) => {
  return ({
      players: state.players.all,
    })
}

export default connect(mapStateToProps)(Players);
