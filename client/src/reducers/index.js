import { combineReducers } from 'redux'

import playersReducer from './playersReducer'
import gamesReducer from './gamesReducer'
import optionsReducer from './optionsReducer'
import newGameReducer from './newGameReducer'

const rootReducer = combineReducers({
  players: playersReducer,
  games: gamesReducer,
  options: optionsReducer,
  newGame: newGameReducer
})

export default rootReducer
