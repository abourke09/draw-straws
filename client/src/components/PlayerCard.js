import React from 'react';
import Card from 'react-bootstrap/Card'

const PlayerCard = (props) => {
  const url = `/players/${props.player.id}`

  const gameNames = props.player.games.map( (game, index) => <li key="index">{game.name}</li> )

    return (
      <Card bg="light" style={ {margin: '25px', flex: '0 1 24%'} }>
        <Card.Header>{props.player.name}</Card.Header>

        <Card.Body>
          <Card.Subtitle>Number of Games Played: {props.player.games.length}</Card.Subtitle>

          <Card.Text className="mb-2 text-muted">
            <ol>{gameNames}</ol>
          </Card.Text>

          <Card.Link href= {url} >View Player's Page</Card.Link>
        </Card.Body>

      </Card>
      )
}

export default PlayerCard;
