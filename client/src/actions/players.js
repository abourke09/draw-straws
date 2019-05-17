// const API_URL = 'http://localhost:3001/api'
//
// export const setPlayers = players => {
//   return {
//     type: 'GET_PLAYERS_SUCCESS',
//     players,
//   }
// }
//
// export const getPlayers = () => {
//   return dispatch => {
//     return fetch(`${API_URL}/players`)
//       .then(response => response.json())
//       .then(players => dispatch(setPlayers(players)))
//       .catch(error => console.log(error))
//   }
// }

const baseUrl = 'http://localhost:3001/api'

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
