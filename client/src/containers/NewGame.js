import React, { Component } from 'react'
import GameFormOne from '../components/GameFormOne'
import GameFormTwo from '../components/GameFormTwo'
import GameFormThree from '../components/GameFormThree'
import GameFormFour from '../components/GameFormFour'

class NewGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      gameName: "Candyland",
      playersCount: 3,
      playersArray: [
        {name: "Annie"},
        {name: "Lokesh"},
        {name: "Greg"},
        {name: ""},
        {name: ""}
      ],
      optionsArray: [
        {description: "pie"},
        {description: "pizza"},
        {description: "salad"},
        {description: ""},
        {description: ""}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  selectOption = (event) => {
    console.log(`you've clicked the selectOption Button for ${this.shuffledPlayers[0]}!`)
    // x++
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleChangePlayersInput = event => {
    this.setState({ ...this.state,
      playersArray: this.state.playersArray.map((player, index) =>
         Number(event.target.id) === index ? {name: event.target.value} : player
      )
    })
  }

  handleChangeOptionsInput = event => {
    this.setState({ ...this.state,
      optionsArray: this.state.optionsArray.map((option, index) =>
         Number(event.target.id) === index ? {description: event.target.value} : option
      )
    })
  }

  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 4? 4: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  get previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <4){
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
        Next
        </button>
      )
    }
    return null
  }

  render() {
    return(
      <React.Fragment>
        <h1 align= 'center'>Play A New Game <em></em></h1>

        <form style = { { margin: '0 auto', width: '300px' } }>
          <GameFormOne
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            gameName={this.state.gameName}
            playersCount={this.state.playersCount}
          />
          <GameFormTwo
            currentStep={this.state.currentStep}
            handleChangePlayersInput={this.handleChangePlayersInput}
            handleChangeOptionsInput={this.handleChangeOptionsInput}
            gameName={this.state.gameName}
            playersCount={this.state.playersCount}
            playersArray={this.state.playersArray}
            optionsArray={this.state.optionsArray}
          />
          <GameFormThree
            currentStep={this.state.currentStep}
            gameName={this.state.gameName}
            playersCount={this.state.playersCount}
            playersArray={this.state.playersArray}
            optionsArray={this.state.optionsArray}
          />
          <GameFormFour
            currentStep={this.state.currentStep}
            selectOption={this.selectOption}
            gameName={this.state.gameName}
            playersCount={this.state.playersCount}
            playersArray={this.state.playersArray}
            optionsArray={this.state.optionsArray}
          />
          {this.previousButton}
          {this.nextButton}
        </form>
      </React.Fragment>
    )
  }
}

export default NewGame
