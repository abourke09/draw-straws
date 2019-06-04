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
  - [ ] First form takes in the Game name and number of Players
  - [ ] When first form submits, data is saved to state (?) and second form replaces the first on the DOM
  - [ ] Second form takes in the Players names and Option descriptions
  - [ ] When second form submits, it is replaced on the DOM with a list of the Players/Options and a big "Draw!" button.
  - [ ] The "Draw!" button will add text to the DOM alerting each subsequent user that it's their turn, allowing them to select and option when it's their turn.
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
