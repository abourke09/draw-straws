import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameFormOne from '../components/GameFormOne'
import GameFormTwo from '../components/GameFormTwo'

class NewGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameName: "",
      playersCount: 2,
      playersArray: [],
      optionsArray: []
    };
  }

  // FORM ONE- sets gameName and playersCount
  handleChangeFormOne = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmitFormOne = event => {
    event.preventDefault();
    this.props.toggleFirstFormSubmitted(true)
    this.props.addGameName(this.state.gameName)
    this.props.addPlayersCount(this.state.playersCount)

    this.setState({
      gameName: "",
      playersCount: 2,
    })
  // How do I render a new div/component here to show FormTwo?
  //this.forceUpdate();
  }

  // componentDidMount() {
  //   this.forceUpdate()
  // }
  
  // FORM TWO- sets playersArray and optionsArray
  handleChangeFormTwo = event => {
    console.log("Event from handleChangeFormTwo: ", event)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmitFormTwo = event => {
    event.preventDefault();
    console.log("this.state from handleSubmitFormTwo: ", this.state)
  //  this.props.toggleFirstFormSubmitted(true)
   this.props.addPlayersArray(this.state.playersArray)
   this.props.addOptionsArray(this.state.optionsArray)
    this.setState({
      playersArray: [],
      optionsArray: []
    })
  }


  // Fisher-Yates shuffle: https://javascript.info/task/shuffle
    shuffleDraw(array) {
    //  let array = ["Annie", "Grace", "Lindsay"];
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array[0]
    }

  render() {
  //  const form = this.props.firstFormSubmitted ? <GameFormTwo handleSubmitFormTwo = {this.handleSubmitFormTwo} handleChangeFormTwo = {this.handleChangeFormTwo}/> :<GameFormOne handleSubmitFormOne = {this.handleSubmitFormOne} handleChangeFormOne = {this.handleChangeFormOne}/>

    return(
      <div>
      {this.props.firstFormSubmitted ? <GameFormTwo handleSubmitFormTwo = {this.handleSubmitFormTwo} handleChangeFormTwo = {this.handleChangeFormTwo}/> :<GameFormOne handleSubmitFormOne = {this.handleSubmitFormOne} handleChangeFormOne = {this.handleChangeFormOne}/> }
      <GameFormTwo handleSubmitFormTwo = {this.handleSubmitFormTwo} handleChangeFormTwo = {this.handleChangeFormTwo}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("firstFormSubmitted: ", state.firstFormSubmitted )
  return {
    firstFormSubmitted: state.firstFormSubmitted,
    gameName: state.gameName,
    playersCount: state.playersCount,
    playersArray: state.playersArray,
    optionsArray: state.optionsArray
  }
}

const mapDispatchToProps = dispatch => ({
  toggleFirstFormSubmitted: payload => dispatch({ type: 'TOGGLE_FIRST_FORM_SUBMITTED', payload }),
  addGameName: name => dispatch({ type: 'ADD_GAME_NAME', name }),
  addPlayersCount: count => dispatch({ type: 'ADD_PLAYERS_COUNT', count }),
  addPlayersArray: players => dispatch({ type: 'ADD_PLAYERS_ARRAY', players }),
  addOptionsArray: options => dispatch({ type: 'ADD_OPTIONS_ARRAY', options })
})

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);

// if (this.props.firstFormSubmitted) {
//   const form = <GameFormTwo
//     gameName = {this.props.gameName}
//     playersCount = {this.props.playersCount}
//   />
// } else {
//   const form = <GameFormOne
//     toggleFirstFormSubmitted = {this.props.toggleFirstFormSubmitted}
//     addGameName = {this.props.addGameName}
//     addPlayersCount = {this.props.addPlayersCount}
//   />
// }
