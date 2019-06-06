import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class GameFormTwo extends Component {

  render() {

      return(

      <div className="gameForm">
        <h1 align= 'center'>New Game: {this.props.gameName} Form Two!</h1>
        <p>There should be {this.props.playersCount} options/players textboxes</p>

        <Form onSubmit={this.props.handleSubmitFormTwo} style = { { margin: '0 auto', width: '300px' } }>
          <Form.Group controlId="gameName">
            <Form.Label>Players' Names:</Form.Label>
            <Form.Control
              type="text"
              value={this.props.gameName}
              onChange={this.props.handleChangeFormTwo}
            />
          </Form.Group>
          <Form.Group controlId="playersCount">
            <Form.Label>Options:</Form.Label>
            <Form.Control
              type="text"
              value={this.props.optionsArray}
              onChange={this.props.handleChangeFormTwo}
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

export default connect(mapStateToProps)(GameFormTwo);
