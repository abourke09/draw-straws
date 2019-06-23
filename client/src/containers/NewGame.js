import React, { Component } from 'react'
// import { connect } from 'react-redux'
import GameFormOne from '../components/GameFormOne'
import GameFormTwo from '../components/GameFormTwo'
import GameFormThree from '../components/GameFormThree'
import GameFormFour from '../components/GameFormFour'

class NewGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      gameName: "",
      playersCount: 2,
      playersArray: [
        {name: ""},
        {name: ""},
        {name: ""},
        {name: ""},
        {name: ""}
      ],
      optionsArray: [
        {description: ""},
        {description: ""},
        {description: ""},
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

  handleSubmit = (event) => {
    event.preventDefault()
    const { gameName, playersCount } = this.state
    console.log("This.state.gameName: ", gameName )
    console.log("This.state.playersCount: ", playersCount )
    console.log("Event: ", event )
  }

  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 10? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  get previousButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if(currentStep !==1){
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    // ...else return nothing
    return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 2, then render the "next" button
    if(currentStep <4){
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
        Next
        </button>
      )
    }
    // ...else render nothing
    return null;
  }


  render() {
    //console.log("players array: ", this.state.playersArray)
    return(
      <React.Fragment>
      <h1 align= 'center'>Play A New Game <em>(Step #{this.state.currentStep})</em></h1>

      <form onSubmit={this.handleSubmit} style = { { margin: '0 auto', width: '300px' } }>

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

// const mapStateToProps = state => {
//   return {
//     firstFormSubmitted: state.firstFormSubmitted,
//     gameName: state.gameName,
//     playersCount: state.playersCount,
//     playersArray: state.playersArray,
//     optionsArray: state.optionsArray
//   }
// }
//
// const mapDispatchToProps = dispatch => ({
//   toggleFirstFormSubmitted: payload => dispatch({ type: 'TOGGLE_FIRST_FORM_SUBMITTED', payload }),
//   addGameName: name => dispatch({ type: 'ADD_GAME_NAME', name }),
//   addPlayersCount: count => dispatch({ type: 'ADD_PLAYERS_COUNT', count }),
//   addPlayersArray: players => dispatch({ type: 'ADD_PLAYERS_ARRAY', players }),
//   addOptionsArray: options => dispatch({ type: 'ADD_OPTIONS_ARRAY', options })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
export default NewGame
