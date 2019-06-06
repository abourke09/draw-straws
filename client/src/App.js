import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar'
import Home from './components/Home';
import NewGame from './containers/NewGame';
import Players from './containers/Players';
import Games from './containers/Games';
import PlayerShow from './containers/PlayerShow';
import GameShow from './containers/GameShow';
import { connect } from 'react-redux';
import { fetchPlayers } from './actions/players'
import { fetchGames } from './actions/games'

class App extends Component {
  componentDidMount(){
    this.props.fetchPlayers()
    this.props.fetchGames()
  }

  render() {
    return (
      <div>
        <Router>
          <MyNavbar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/new" component={NewGame}/>
          <Route exact path="/players" component={Players}/>
          <Route exact path="/games" component={Games}/>
          <Route path="/players/:id" component={PlayerShow} />
          <Route path="/games/:id" component={GameShow} />
        </Router>
      </div>
    )
  }
}



export default connect(null, {fetchPlayers, fetchGames})(App)
