import { combineReducers } from 'redux'

import playersReducer from './playersReducer'
import gamesReducer from './gamesReducer'

const rootReducer = combineReducers({
  players: playersReducer,
  games: gamesReducer,
})

export default rootReducer
