import React from 'react';
import Card from 'react-bootstrap/Card'

const GameCard = (props) => {
  const url = `/games/${props.game.id}`

  const gameOptions = props.game.options.map( (option, index) => <li key="index">{option.description}</li> )

    return (
      <Card bg="light" style={ {margin: '25px', flex: '0 1 24%'} }>
        <Card.Header>{props.game.name}</Card.Header>

        <Card.Body>
          <Card.Subtitle>Number of Players in this Game: {props.game.players.length}</Card.Subtitle>
          <br></br>
          <Card.Subtitle>Options:</Card.Subtitle>

          <Card.Text className="mb-2 text-muted">
            <ol>{gameOptions}</ol>
          </Card.Text>

          <Card.Link href= {url} >View Game's Page</Card.Link>
        </Card.Body>

      </Card>
      )
}

export default GameCard;
