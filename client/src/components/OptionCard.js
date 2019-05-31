import React from 'react';
import Card from 'react-bootstrap/Card'

const OptionCard = (props) => {
    return (
      <Card bg="light" style={ { order: `${props.option.draw}`,margin: '25px', flex: '0 1 24%'} }>
        <Card.Header>Draw #{props.option.draw}</Card.Header>
        <Card.Body>
          <Card.Subtitle>{props.option.player.name}: {props.option.description}</Card.Subtitle>
        </Card.Body>
      </Card>
      )
}

export default OptionCard;
