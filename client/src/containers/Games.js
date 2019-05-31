import React, { Component } from 'react'
import { connect } from 'react-redux';
import GameCard from '../components/GameCard'
import CardDeck from 'react-bootstrap/CardDeck'

class Games extends Component {

  render() {

    return (
      <div>
        <h1 align= 'center'>All Games</h1>
        <CardDeck style = { {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' } }>
          {this.props.games.map((game) =>
             <GameCard game={game} key={game.id}/> )
          }
        </CardDeck>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return ({
      games: state.games.all,
    })
}

export default connect(mapStateToProps)(Games);
