const baseUrl = 'http://localhost:3001/api'

//fetch ALL of the games
export const fetchGames = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/games`, data)
      .then(response => response.json())
      .then(games => dispatch({
          type: 'FETCH_GAMES',
          payload: games
      }))
      .catch(err => err)
  }
}

//fetch and set ONE particular game
export const setGame = (game_id) => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/games/${game_id}`, data)
      .then(response => response.json())
      .then(game => dispatch({
          type: 'SET_GAME',
          payload: game
      }))
      .catch(err => err)
  }
}

//create a new game
export const createGame = gameState => {
  //convert game data to a format that the game controller will like:
  const game = {
    name: gameState.gameName,
    players: gameState.players
  }

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ game })
  }

  return dispatch => {
    fetch(`${ baseUrl }/games`, data)
      .then(response => response.json())
      .then(formattedGame => dispatch({
        type: 'CREATE_GAME',
        payload: formattedGame
      }))
      .then(formattedGame => dispatch({
        type: 'CREATE_PLAYERS',
        payload: formattedGame.players
      }))
      .catch(err => err)
  }


}
