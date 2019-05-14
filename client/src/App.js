import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar'
import Home from './components/Home';
import New from './components/New';
import AllPlayers from './components/AllPlayers';
import AllGames from './components/AllGames';

function App() {
  return (
    <div>
      <Router>
        <MyNavbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/new" component={New}/>
        <Route exact path="/allPlayers" component={AllPlayers}/>
        <Route exact path="/allGames" component={AllGames}/>
      </Router>
    </div>
  );
}



export default App;
