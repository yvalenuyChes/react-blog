const initialState = {
   openPopupWindow: false
}

export default function appReducer(state = initialState, action){
   switch(action.type){
      case 'OPEN_POPUP':
         return{
            ...state,
            openPopupWindow:true
         }
      
         case 'CLOSE_POPUP':
            return{
            ...state,
            openPopupWindow:false
         }

       default: return state
   }
}