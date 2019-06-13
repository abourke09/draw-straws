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
        let idPlayer = "playersArray[" + i + "].name"
        let idOption = "optionsArray[" + i + "].description"

        playersContainer.push(<><label htmlFor="playersArray[i]">Player {i+1} Name:</label>
        <input
          className="form-control"
          id={idPlayer}
          name={player.name}
          type="text"
          value= {player.name}
          onChange={this.props.handleChange}
        /></>);

        optionsContainer.push(<><label htmlFor="optionsArray[i]">Option {i+1}:</label>
        <input
          className="form-control"
          id={idOption}
          name={option.description}
          type="text"
          value= {option.description}
          onChange={this.props.handleChange}
        /></>);
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
