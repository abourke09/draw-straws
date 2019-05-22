const baseUrl = 'http://localhost:3001/api'

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
