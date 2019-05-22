import React, { Component } from 'react'
import { connect } from 'react-redux';
import GameCard from '../components/GameCard'
import CardDeck from 'react-bootstrap/CardDeck'

class Games extends Component {

  render() {
    const { games } = this.props

    return (
      <CardDeck style = { {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' } }>
        {this.props.games.map((game, index) =>
           <GameCard game={game} key={index}/> )
        }
      </CardDeck>
      );
  }
}

const mapStateToProps = (state) => {
  return ({
      games: state.games.all,
    })
}

export default connect(mapStateToProps)(Games);
