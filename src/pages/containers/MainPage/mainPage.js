
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import classes from './MainPage.module.scss'

export default function MainPage(){

   const username = useSelector(state => state.appReducer.username)
   
   return(
      <div className={classes.main_page}>
         <h2 className={classes.main_page__welcome}>
         {
            username 
            ? ` Привет, ${username}`
            : ' Привет, Гость'
         }
         </h2>
         <div>
            <Link to='/news'>Новости</Link>
         </div>

      </div>
   )
}