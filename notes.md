Game
has_many players
has_many options :through players

Player
has_many games
has_many options

Option
belongs_to player
belongs_to game :through player
