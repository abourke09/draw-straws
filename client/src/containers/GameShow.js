import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGame } from '../actions/games';
import OptionCard from '../components/OptionCard'
import CardDeck from 'react-bootstrap/CardDeck'

class GameShow extends Component {

  constructor(props) {
    super()
    this.game_id = props.match.params.id
  }

  componentDidMount() {
    this.props.setGame(this.game_id)
  }

  render() {
console.log("in render: ", )
    return (
      <div>
        <h1 align= 'center'>Game: {this.props.game.name}</h1>

        <CardDeck style = { {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' } }>
          {this.props.game.options&&this.props.game.options.map((option) =>
             <OptionCard option={option} key={option.id}/> )
          }
        </CardDeck>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("in mapStateToProps: ", state)

  return ({
      game: state.games.current,
    })
}

export default connect(mapStateToProps, {setGame})(GameShow);
