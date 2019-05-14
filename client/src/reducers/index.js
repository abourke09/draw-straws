import { combineReducers } from 'redux'

import playersReducer from './playersReducer'
import gamesReducer from './gamesReducer'
import optionsReducer from './optionsReducer'

const rootReducer = combineReducers({
  players: playersReducer,
  games: gamesReducer,
  options: optionsReducer
})

export default rootReducer
