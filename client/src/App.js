import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar'
import Home from './components/Home';
import GameForm from './components/GameForm';
import Players from './components/Players';
import Games from './components/Games';
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchPlayers } from './actions/players'

class App extends Component {
  componentDidMount(){
    this.props.fetchPlayers()
  }

  render() {
    return (
      <div>
        <Router>
          <MyNavbar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/games/new" component={GameForm}/>
          <Route exact path="/players" component={Players}/>
          <Route exact path="/games" component={Games}/>
        </Router>
      </div>
    )
  }
}

export default connect(null, {fetchPlayers})(App)
