import React, { Component } from 'react';
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
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.fetchPlayers()
    this.props.fetchGames()
  }

  render() {
    return (
      <div>
        <MyNavbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/new" component={NewGame}/>
          <Route exact path="/players" component={Players}/>
          <Route exact path="/games" component={Games}/>
          <Route path="/players/:id" component={PlayerShow} />
          <Route path="/games/:id" component={GameShow} />
        </Switch>
      </div>
    )
  }
}



export default connect(null, {fetchPlayers, fetchGames})(App)
