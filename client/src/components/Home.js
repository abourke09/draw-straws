import React from 'react'

const Home = () => (
  <div className="Home">
    <h1 align= 'center'>Welcome to Draw Straws!</h1>
    <p>Draw Straws is a selection game that helps groups assign specific tasks to individuals.</p>
    <p>To play, select "New" from the menu and enter a game name and the number of players. Next, enter
    each player's name and list every possible option for the game.</p>
    <p><em>For example, a group of roommates could name their game House Chores and list options such as
    1)Take out the trash, 2)Do the dishes, and 3)Vacuum the living room.</em></p>
    <p>Once you click 'Next' to 'Draw Straws', a player will be selected at random to choose an option first.
    This process repeats until all of the players have chosen. Lastly, the game is saved and can be reviewed
    in the All Games section.</p>
  </div>
  )

export default Home;
