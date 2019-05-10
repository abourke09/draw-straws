const initialState = {
  current: {},
  all: []
}

export default function playersReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_PLAYER':
      return { ...state, current: action.payload }
    default: return state
  }
}
