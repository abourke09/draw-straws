import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlayer } from '../actions/players';
import OptionCard from '../components/OptionCard'
import CardDeck from 'react-bootstrap/CardDeck'
import { Col, Container, Row } from 'react-bootstrap/'
import Card from 'react-bootstrap/Card'

class PlayerShow extends Component {

  constructor(props) {
    super()
    this.player_id = props.match.params.id
  }

  componentDidMount() {
    this.props.setPlayer(this.player_id)
  }

  render() {
    return (
      <div>
        <h1 align= 'center'>Player: {this.props.player.name}</h1>
        <Container>
          <CardDeck style = { {display: 'flex', flexDirection: 'column', alignItems: 'baseline' } }>
            {this.props.player.options&&this.props.player.options.map((option) =>
                <Row key={option.game.name}>
                  <Col>
                    <Card bg="light" style={ {
                    //  fontSize: '30',
                      justifyContent: 'center',
                      margin: '25px',
                      flex: '0 1 24%',
                      display: 'flex',
                      width: '200px',
                      height: '120px'
                    } }>
                      <Card.Link href= {`/games/${option.game.id}`}>{option.game.name}</Card.Link>
                    </Card>
                  </Col>

                  <Col>
                    <h1 style={ {
                    //  fontSize: '30',
                      justifyContent: 'center',
                      margin: '25px',
                      flex: '0 1 24%',
                      display: 'flex',
                      width: '200px',
                      height: '120px'
                    } }> -> </h1>
                  </Col>

                  <Col>
                    <OptionCard option={option} key={option.id}/>
                  </Col>

                </Row>
              )
            }
          </CardDeck>
        </Container>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      player: state.players.current,
    })
}

export default connect(mapStateToProps, {setPlayer})(PlayerShow);
