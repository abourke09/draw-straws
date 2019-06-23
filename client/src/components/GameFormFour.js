import React, { Component } from 'react'
// - [ ] Fourth form randomly shuffles the array of Players and alerts each when it's
// their turn the draw, allowing them to select an option button.

// - [ ] When each user selects an option button, it adds three new key:value pairs to the
// GameFormFour state, {name:"string"}, {draw:integer} and {description:"string"}

// form four receives the players array as props
// componentDidUpdate takes in the playersArray prop and pushes the players names into the
//    new state array with setState (not all 5, don't include empty strings)
// when button click happens, the current player id ++ increments up
// we know which draw/current player's turn it is when their index (this.state.players[index] === currentPlayerIndex)
// the shuffle happens before this.props.playersArray is pushed into this.state.players

class GameFormFour extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPlayerIndex: 0,
      players: [
        // {name:"string", draw:integer, description:"string"},
      ]
    };
  }


componentDidUpdate(prevProps, prevState, snapshot){
//  let newArray = this.shuffleDraw(this.props.playersArray)
  if (prevProps.playersArray !== this.state.players) {
    this.setState({
      ...this.state,
      players : prevProps.playersArray
      })
  }
// let newArray = ["Pink", "Purple"]
//   console.log("new array: ", newArray)
//   return newArray
}

  handleChange = event => {
    let x = 0

    console.log(`you've clicked the selectOption Button for ${this.shuffledPlayers[x]}!`)

    // this.setState({
    //   [event.target.name]: event.target.value
    // });
    x++
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

      const rowContainer = []
      let i = 0

      while (i < this.props.playersCount) {
        rowContainer.push(<>
        <tr key={i}>
          <td>{this.props.playersArray[i].name}</td>
          <td><button type="button" onClick={this.handleClick}>{this.props.optionsArray[i].description}</button></td>
        </tr>
        </>)
        i++
      }

      let shuffledPlayers = []
      this.shuffleDraw(this.props.playersArray).map((player, index) =>
        shuffledPlayers.push(`${player.name} `)
      )

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
          <p><em>Congratulations, {this.state.players[this.state.currentPlayerIndex]}!</em></p>
        </div>
    )
  }
}

export default GameFormFour;
