const initialState = {
  current: {},
  all: []
}

export default function playersReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_PLAYERS':
      return { ...state, all: action.payload }
    case 'SET_PLAYER':
      return { ...state, current: action.payload }
    case 'CREATE_PLAYERS':
    //i need to make an option to update the player if they've already been created
      return { ...state, all: state.all.concat(action.payload)}
  default: return state
  }
}
