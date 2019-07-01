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
  - [X] First form takes in the Game name and number of Players.
  - [X] When first form submits, data is saved to NewGame state and second form replaces the first on the DOM.
  - [X] Second form takes in the state from NewGame and allows the user to input Players names and Option descriptions.
  - [X] Third form displays a table of the Players & Options and explains that the "Next"" button will begin the Draw.
  - [X] Fourth form randomly shuffles the array of Players and alerts each when it's their turn the draw, allowing them to select an option button.
  - [X] When each user selects an option button, it adds two new key:value pairs to each player in the playersArray, {"draw":integer} and {"description":"string"}
  - [X] When all players have selected an option button, text is displayed saying "Click Next to finish and save this game."
  - [X] The Game/Options/Players are then saved to the API database
    - [X] Build out the Game controller action so that it can create the players and options all in one go
    - [ ] Check whether any players are already in the database, in which case UPDATE instead of create
    - [X] Build a create action and reducer for the new game  
  - [ ] The DOM then redirects to the new GameShow page


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
