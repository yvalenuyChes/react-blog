
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Navigation.module.scss'

export default function Navigation(){

   const authentication = useSelector(state => state.appReducer.auth)

   const dispatch = useDispatch()

   function openPopup(){
      dispatch({type:'OPEN_POPUP'})
   }

   function logout(){
      dispatch({type:'LOGOUT'})
   }


   return(
      <nav className={classes.navigation}>
      <div className={classes.navigation__body}>
         <div className={classes.navigation__button}>
         {
            authentication 
            ? <Button ariant='contained' onClick={logout}>Выйти</Button>
            :  <Button  variant='contained' onClick={openPopup}>Войти</Button>
         } 
         </div>
      </div>
      </nav>
   )
}