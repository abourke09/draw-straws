import React, { Component } from 'react'
import update from 'immutability-helper';

//when each player's description !== "" , add a save game button to the DOM

class GameFormFour extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPlayerIndex: -1,
      players: []
    };
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.currentStep === 4) {
      if (this.state.currentPlayerIndex === -1){
        let filteredPlayers = prevProps.playersArray.filter(player => player.name !== "")
        let shuffledPlayers = []

        this.shuffleDraw(filteredPlayers).map((player, index) =>
            shuffledPlayers.push({name:`${player.name}`, draw:index+1, description:"" })
        )

        this.setState({
          currentPlayerIndex: this.state.currentPlayerIndex + 1,
          players: shuffledPlayers
        })
      }
    } //checks currentStep is 4
  } //closes componentDidUpdate

  handleClick = event => {
    let i = this.state.currentPlayerIndex
    let shouldUpdate = true

    this.state.players.map((player, index) =>
      event.currentTarget.innerText === player.description ? shouldUpdate = false : shouldUpdate
    )

    if (shouldUpdate) {
      this.setState({
        currentPlayerIndex: i + 1,
        players: this.state.players.map((player, index) =>
          index === i ?
          update(this.state.players[i], {description: {$set: `${event.currentTarget.innerText}`}})
          :
          player
        )
      })
    } else {
      alert("Sorry, another player has already chosen that option. Please try again.")
    }
  }

// Fisher-Yates shuffle: https://javascript.info/task/shuffle
  shuffleDraw(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  render() {
      if (this.props.currentStep !== 4) {
        return null
      }

      let message = "Click the Save button to save and end this game"
      if (this.state.players[this.state.currentPlayerIndex]) {
        message = `Congratulations ${this.state.players[this.state.currentPlayerIndex].name}, it's your turn to draw!`
      }

      const rowContainer = []
      let i = 0
      while (i < this.props.playersCount) {
        rowContainer.push(
          <React.Fragment key={i}>
            <tr>
              <td>{this.props.playersArray[i].name}</td>
              <td><button type="button" onClick={this.handleClick}>{this.props.optionsArray[i].description}</button></td>
            </tr>
          </React.Fragment>
        )
        i++
      }

      return(
        <div className="form-group">
          <h2 align="center">{this.props.gameName}</h2>

          <table width="100%" border="1">
            <tbody>
              <tr>
                <th>Players</th>
                <th>Options</th>
              </tr>
              {rowContainer}
            </tbody>
          </table>
        <p><em>{message}</em></p>
        </div>
    )
  }
}

export default GameFormFour;
