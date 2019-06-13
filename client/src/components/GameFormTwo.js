import React, { Component } from 'react'

class GameFormTwo extends Component {

  render() {
      if (this.props.currentStep !== 2) {
        return null
      }

      const playersContainer = []
      const optionsContainer = []
      let i = 0;

      while (i <= (this.props.playersCount - 1)) {
        let player = this.props.playersArray[i]
        let option = this.props.optionsArray[i]

        playersContainer.push(<div key={i.toString()}><label htmlFor="playersArray[i]">Player {i+1} Name:</label>
        <input
          className="form-control"
          id={i}
          name={player.name}
          type="text"
          value= {player.name}
          onChange={this.props.handleChangePlayersInput}
        /></div>);

        optionsContainer.push(<div key={i}><label htmlFor="optionsArray[i]">Option {i+1}:</label>
        <input
          className="form-control"
          id={i}
          name={option.description}
          type="text"
          value= {option.description}
          onChange={this.props.handleChangeOptionsInput}
        /></div>);
        i++;
      }

      return(
        <div className="form-group">
          {playersContainer}
          {optionsContainer}
        </div>
    )
  }
}

export default GameFormTwo;
