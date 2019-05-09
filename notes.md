Notes
=============


Relationships
-------------
Player: name
has_many :options
has_many :games, through: :options

Option: description, draw, player_id, game_id
belongs_to :player
belongs_to :game

Game: name
has_many :options
has_many :players, through: :options


To-Dos
-----------
- [ ] Make show pages first
  - [ ] All Games
  - [ ] All Players

- [ ] Make forms for a new game only after the show pages are done


Components & Containers
-----------------------
`</Players>` (container)
`</PlayerCard>`
`</PlayerShow>`

`</Games>`  (container)
`</GameCard>`
`</GameShow>`

`</OptionCard>`
`</NewGame>`


NavBar & Show URLs
-------------------
| Home          | '/'           |
| New Game      | '/new'        |
| All Players   | '/players'    |
| All Games     | '/games'      |
| </PlayerShow> | '/players/:id'|
| </GameShow>   | '/games/:id'  |
