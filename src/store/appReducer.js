const initialState = {
   openPopupWindow: false,
   auth:false,
   username: ''
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
         case 'SUCCESS_AUTH':
            return{
               openPopupWindow:false,
               auth:true
            }
         case 'LOGOUT':
            return{
               ...state,
               auth:false,
               username:''
            }
         case 'JHON_LOGIN':
            return{
               ...state,
               username:'Джон'
            }
            case 'IVAN_LOGIN':
               return{
                  ...state,
                  username:'Иван'
               }

       default: return state
   }
}