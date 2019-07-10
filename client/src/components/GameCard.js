import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom';

const GameCard = (props) => {
  const url = `/games/${props.game.id}`

  const gameOptions = props.game.options.map( (option, index) => <ListGroup.Item key={index}>{option.description}</ListGroup.Item> )

    return (
      <Card bg="light" style={ {margin: '25px', flex: '0 1 24%'} }>
        <Card.Header>{props.game.name}</Card.Header>

        <Card.Body>
          <Card.Subtitle>Number of Players in this Game: {props.game.players.length}</Card.Subtitle>
          <br></br>
          <Card.Subtitle>Options:</Card.Subtitle>

          <ListGroup className="mb-2 text-muted">{gameOptions}</ListGroup>

          <Link to= {url} >View Game's Page</Link>
        </Card.Body>

      </Card>
      )
}

export default GameCard;
