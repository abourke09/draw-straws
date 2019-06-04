import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class GameForm extends Component {

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
    let myArray = ["Annie", "Grace", "Lindsay"]
    return(
      <div className="gameForm">
        <h1 align= 'center'>Play A New Game: {this.shuffleDraw(myArray)}</h1>
        <Form style = { { margin: '0 auto', width: '300px' } }>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Game Name:</Form.Label>
            <Form.Control/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Number of Players:</Form.Label>
            <Form.Control as="select">
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

export default GameForm;
