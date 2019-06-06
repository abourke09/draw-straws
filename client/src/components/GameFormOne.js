import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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

    return(

      <div className="gameForm">
        <h1 align= 'center'>Play A New Game</h1>
        <Form onSubmit={this.props.handleSubmitFormOne} style = { { margin: '0 auto', width: '300px' } }>
          <Form.Group controlId="gameName">
            <Form.Label>Game Name:</Form.Label>
            <Form.Control
              type="text"
              value={this.props.gameName}
              onChange={this.props.handleChangeFormOne}
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
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
