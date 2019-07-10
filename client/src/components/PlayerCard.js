import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom';

//js SIDEeffects setstate 
class PlayerCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleClick = event => {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1
    })
  }

  render() {
  const url = `/players/${this.props.player.id}`

  const gameNames = this.props.player.games.map( (game, index) => <ListGroup.Item key={index}>{game.name}</ListGroup.Item> )


  return(
    <Card bg="light" style={ {margin: '25px', flex: '0 1 24%'} }>
      <Card.Header>{this.props.player.name}</Card.Header>

      <Card.Body>
        <Card.Subtitle>Number of Games Played: {this.props.player.games.length}</Card.Subtitle>

        <ListGroup className="mb-2 text-muted">{gameNames}</ListGroup>

        <Link to= {url} >View Player's Page</Link>
        <p><button type="button" onClick={this.handleClick}>Like</button> : {this.state.counter}</p>

      </Card.Body>

    </Card>
    )
  }
}

export default PlayerCard;
