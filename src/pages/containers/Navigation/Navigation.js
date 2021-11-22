
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import classes from './Navigation.module.scss'

export default function Navigation(){

   const dispatch = useDispatch()

   function openPopup(){
      dispatch({type:'OPEN_POPUP'})
   }


   return(
      <nav className={classes.navigation}>
      <div className={classes.navigation__body}>
         <div className={classes.nav__image}>
            <img src = '' alt='logo'/>
         </div>
         <div className={classes.navigation__button}>
            <Button onClick={openPopup}>Войти</Button>
         </div>
      </div>
      </nav>
   )
}