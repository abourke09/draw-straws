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

- [X] Make form(s) for a new game
  - [X] First form takes in the Game name and number of Players.
  - [X] When first form submits, data is saved to NewGame state and second form replaces the first on the DOM.
  - [X] Second form takes in the state from NewGame and allows the user to input Players names and Option descriptions.
  - [X] Third form displays a table of the Players & Options and explains that the "Next"" button will begin the Draw.
  - [X] Fourth form randomly shuffles the array of Players and alerts each when it's their turn the draw, allowing them to select an option button.
  - [X] When each user selects an option button, it adds two new key:value pairs to each player in the playersArray, {"draw":integer} and {"description":"string"}
  - [X] When all players have selected an option button, text is displayed saying "Click Next to finish and save this game."
  - [X] The Game/Options/Players are then saved to the API database
    - [X] Build out the Game controller action so that it can create the players and options all in one go
    - [X] Check whether any players are already in the database, in which case UPDATE instead of create
    - [X] Build a create action and reducer for the new game  
    - [X] Update the Redux Store with the new Game and either update or create the Players array
  - [X] The DOM then redirects to the new GameShow page
  - [ ] Get the Nav to not re-fetch every time a navlink is clicked
  - [ ] Better formatting on the Player Show page
  - [ ] Make a branch that experiments with incorporating more Redux instead of using the React state for the game portion
  - [ ] Make this Readme better
  - [ ] Record Video walkthrough
  - [ ] Finish writing blogpost
  - [ ] Review React and Redux for project review questions, compile notes
  REVIEW IS 7AM-7:45AM WEDNESDAY WITH ALICE BALBUENA!

Clear and Re-Seed the database with this command: `rake db:reset`

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

Requirements
-------------------
- [X] The code should be written in ES6 as much as possible
- [X] Use the create-react-app generator to start your project.
- [X] Follow the instructions on this repo to setup the generator: create-react-app
- [X] Your app should have one HTML page to render your react-redux application
- [X] There should be 2 container components
  1. Games
  2. Players
- [X] There should be 5 stateless components:
  1. PlayerCard
  2. OptionCard
  3. GameCard
  4. Home
  5. Navbar
- [X] There should be 3 routes
  1. New
  2. Players
  3. Games
- [X] The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs; docs for v4 can be found here)
- [X] Use Redux middleware to respond to and modify state change
- [X] Make use of async actions to send data to and receive data from a server
- [X] Your Rails API should handle the data persistence. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
- [X] Your client-side application should handle the display of data with minimal data manipulation
- [X] Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
