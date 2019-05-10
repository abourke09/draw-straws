const initialState = {
  current: {},
  all: []
}

export default function gamesReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_GAME':
      return { ...state, current: action.payload }
    default: return state
  }
}
