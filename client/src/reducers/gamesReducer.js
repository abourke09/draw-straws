const initialState = {
  all: [],
  current: {}
}

export default function gamesReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_GAMES':
      return { ...state, all: action.payload }
    case 'SET_GAME':
      return { ...state, current: action.payload }
    case 'CREATE_GAME':
      return { ...state, all: [...state.all, action.payload] }
    default: return state
  }
}
