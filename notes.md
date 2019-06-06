Notes
=============


Relationships
-------------
**Player**: name  
has_many :options  
has_many :games, through: :options  

**Option**: description, draw, player_id, game_id  
belongs_to :player  
belongs_to :game  

**Game**: name  
has_many :options  
has_many :players, through: :options  

To-Dos
-----------
- [X] Make show pages first
  - [X] All Games
  - [X] All Players
  - [X] Individual Game
  - [X] Individual Player

- [ ] Make form(s) for a new game
  - [X] First form takes in the Game name and number of Players
  - [ ] When first form submits, data is saved to newGameReducer state (?) and second form replaces the first on the DOM
  - [ ] Second form takes in the state from newGameReducer and allows the user to input Players names and Option descriptions
  - [ ] When second form submits, it is replaced on the DOM with a list of the Players/Options and a big "Draw!" button.
  - [ ] The "Draw!" button will add text to the DOM alerting each subsequent user that it's their turn, allowing them to select and option when it's their turn.
  - [X] The Draw button calls a function that randomly shuffles the array of Players
  - [ ] Saved the Game/Options/Players to the API database only after all the draws are made (?)
  - [ ] Once all draws are made and the data is saved to the API, the DOM redirects to the GameShow page


Components & Containers
-----------------------
```
</Players> (container, holds PlayerCard)
</PlayerCard>
</PlayerShow> (container, holds OptionCard and game names)

</Games>  (container, holds GameCard)
</GameCard>
</GameShow> (container, holds OptionCard)

</OptionCard>
</Home>
</Navbar>
</GameForm>
```


NavBar & Show URLs
-------------------
| NavBar          | URLs          |
| --------------- | ------------- |
| Home            | '/'           |
| New Game        | '/new'        |
| All Players     | '/players'    |
| All Games       | '/games'      |
| `</PlayerShow>` | '/players/:id'|
| `</GameShow>`   | '/games/:id'  |






delete below one first game form is all good


import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class GameFormOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstFormSubmitted: false,
      gameName: "",
      playersCount: 2,
      playersArray: [],
      optionsArray: []
    };
  }
//write a new handleChange
  handleChange = event => {
    console.log("Event from handleChange: ", event)
    this.setState({
      [event.target.id]: event.target.value
    });
  }
//change to handleFirstFormSubmit
  handleSubmit = event => {
    event.preventDefault();
    console.log("New Game Details: ", this.state)
  //  this.props.addNewGame(this.state)
    this.setState({
      firstFormSubmitted: true,
      gameName: "",
      playersCount: 2,
      playersArray: [],
      optionsArray: []
    })

  }

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
    //myArray and h1 for testing the Fisher-Yates shuffle
    //on a hard-coded array of players
    let myArray = ["Annie", "Grace", "Lindsay"]
    const form = this.state.firstFormSubmitted ? <GameFormOne/> : <GameFormTwo handleChangeSecondForm={} handleSecondFormSubmit={this.} gameName={this.state.gameName} playersCount={this.state.playersCount}/>
    return(
      <div>{form}</div>

      <div className="gameForm">
        <h1 align= 'center'>Play A New Game: {this.shuffleDraw(myArray)}</h1>
        <Form onSubmit={this.handleSubmit} style = { { margin: '0 auto', width: '300px' } }>
          <Form.Group controlId="gameName">
            <Form.Label>Game Name:</Form.Label>
            <Form.Control
              type="text"
              value={this.state.gameName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="playersCount">
            <Form.Label>Number of Players:</Form.Label>
            <Form.Control
              as="select"
              type="select"
              value={this.state.playersCount}
              onChange={this.handleChange}
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

export default GameFormOne;
