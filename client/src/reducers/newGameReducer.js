const initialState = {
  //no ID for Game/Player/Option because nothing is saved to the database yet
  firstFormSubmitted: false,
  gameName: "",
  playersCount: 0,
  playersArray: [],
  optionsArray: []
}

export default function newGameReducer(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_FIRST_FORM_SUBMITTED' :
      return { ...state, firstFormSubmitted: action.payload }
    case 'ADD_GAME_NAME' :
      return { ...state, gameName: action.name}
    case 'ADD_PLAYERS_COUNT' :
      return { ...state, playersCount: action.count }
    case 'ADD_PLAYERS_ARRAY' :
      return { ...state, playersArray: action.players }
    case 'ADD_OPTIONS_ARRAY' :
      return { ...state, optionsArray: action.options }
    // case 'FETCH_TODOS':
    //   return { ...state, all: action.payload }
    // case 'CREATE_TODO':
    //   return { ...state, all: [...state.all, action.payload] }
    // case 'DELETE_TODO':
    //   return { ...state, all: state.all.filter(todo => todo.id !== action.payload.id) }
    // case 'CREATE_SUB_TODO' :
    //   let all = [ ...state.all ]
    //   let idx = all.findIndex(todo => todo.id === action.payload.todo_id)
    //   all[idx].sub_todos.push(action.payload)
    //
    //   return { ...state, all }
    // case 'DELETE_SUB_TODO':
    //   all = [ ...state.all ]
    //   idx = all.findIndex(todo => todo.id === action.payload.todo_id)
    //   all[idx].sub_todos = all[idx].sub_todos.filter(subTodo => subTodo.id !== action.payload.id)

    //  return { ...state, all }
    default: return state
  }
}
