import React from 'react';
import Card from 'react-bootstrap/Card'
//import Nav from 'react-bootstrap/Nav'

const PlayerCard = (props) => {
  const url = `/players/${props.player.id}`

  const gameNames = props.player.games.map( (game, index) => <li key="index">{game.name}</li> )

    return (
      <Card bg="light" style={{ width: '18rem' }}>
        <Card.Header as="h4">{props.player.name}</Card.Header>
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

{/*  <div class="card" >
    <h4>Name: {props.player.name}</h4>
    <h4>Number of Games Played: {props.player.games.length}</h4>
    <h4>{props.player.name} has played {props.player.games.length} game(s)</h4>
    {props.player.games.map((game, index) =>
      <p key={index}>{index + 1}. {game.name} </p>
    )}
    </div>
*/}
