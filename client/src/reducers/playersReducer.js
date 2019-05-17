const initialState = {
  current: {},
  all: []
}

export default function playersReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_PLAYERS':
      return { ...state, all: action.payload }
    default: return state
  }
}
