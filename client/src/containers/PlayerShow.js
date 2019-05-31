import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlayer } from '../actions/players';
import OptionCard from '../components/OptionCard'
import CardDeck from 'react-bootstrap/CardDeck'

class PlayerShow extends Component {

  constructor(props) {
    super()
    this.player_id = props.match.params.id
  }

  componentDidMount() {
    this.props.setPlayer(this.player_id)
  }

  render() {
    return (
      <div>
        <h1>Player: {this.props.player.name}</h1>


{/*
        <CardDeck style = { {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' } }>
          {this.props.player.options.map((option) =>
             <OptionCard option={option} key={option.id}/> )
          }
        </CardDeck>
*/}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      player: state.players.current,
    //  options: state.players.current.options
    })
}

export default connect(mapStateToProps, {setPlayer})(PlayerShow);
