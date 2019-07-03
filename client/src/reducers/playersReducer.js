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
    case 'CREATE_OR_UPDATE_PLAYER':
      if(state.all.find(p => p.name === action.payload.name)) {
        let allArray = [ ...state.all ]
        let idx = allArray.findIndex(player => player.name === action.payload.name)
        allArray[idx] = action.payload
        return { ...state, all: allArray }
      } else {
        return { ...state, all: state.all.concat(action.payload)}
      }
    default: return state
  }
}
