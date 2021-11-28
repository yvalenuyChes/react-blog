const initialState = ''

export default function newsFilter(state = initialState, action){
   switch(action.type){
      case 'FIND_NEWS':
        return action.payload.toUpperCase()
      default: return state
   }
}