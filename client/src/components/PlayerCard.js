import React from 'react';
import Card from 'react-bootstrap/Card'
//import Nav from 'react-bootstrap/Nav'

const PlayerCard = (props) => {
  const url = `/players/${props.player.id}`
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.player.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"># Games Played: {props.player.games.length}</Card.Subtitle>
          <Card.Text>
            {props.player.name} has played {props.player.games.length} game(s)
          </Card.Text>
          <Card.Link href= {url} >Player Show Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
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
