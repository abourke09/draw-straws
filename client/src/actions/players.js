const baseUrl = 'http://localhost:3001/api'

//fetch ALL of the players
export const fetchPlayers = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/players`, data)
      .then(response => response.json())
      .then(players => dispatch({
          type: 'FETCH_PLAYERS',
          payload: players
      }))
      .catch(err => err)
  }
}

//fetch and set ONE particular player
export const setPlayer = (player_id) => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/players/${player_id}`, data)
      .then(response => response.json())
      .then(player => dispatch({
          type: 'SET_PLAYER',
          payload: player
      }))
      .catch(err => err)
  }
}
