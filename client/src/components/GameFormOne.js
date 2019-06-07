import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'

class GameFormOne extends Component {

  // handleChange = event => {
  //   console.log("Event from handleChange: ", event)
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }
  //
  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log("New Game Details: ", this.state)
  //   this.props.toggleFirstFormSubmitted(true)
  //   this.props.addGameName(this.state.gameName)
  //   this.props.addPlayersCount(this.state.playersCount)
  //
  //   this.setState({
  //     gameName: "",
  //     playersCount: 2,
  //   })
  //
  // }

  render() {
    if (this.props.currentStep !== 1) {
      return null
    }

    return(

      <div className="form-group">
        <label htmlFor="gameName">Step 1: Game Name</label>
        <input
          className="form-control"
          id="gameName"
          name="gameName"
          type="text"
          placeholder="Enter the name of your new game"
          value={this.props.gameName} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />

        <label htmlFor="playersCount">Step 2: Number of Players</label>
        <input
          className="form-control"
          id="playersCount"
          name="playersCount"
          type="number"
          placeholder="Enter the number of players in your new game"
          value={this.props.playersCount} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />

          <Form.Group controlId="gameName">
            <Form.Label>Game Name:</Form.Label>
            <Form.Control
              type="text"
              value={this.props.gameName}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="playersCount">
            <Form.Label>Number of Players:</Form.Label>
            <Form.Control
              as="select"
              type="select"
              value={this.props.playersCount}
              onChange={this.props.handleChangeFormOne}
            >
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameName: state.gameName,
    playersCount: state.playersCount
  }
}

export default connect(mapStateToProps)(GameFormOne);
