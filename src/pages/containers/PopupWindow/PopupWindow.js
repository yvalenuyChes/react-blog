import { useDispatch, useSelector } from 'react-redux'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/system'
import classes from './PopupWindow.module.scss'
import { Button, TextField } from '@mui/material'
import {user1, user2} from '../../../db/usersDB'
import { useState } from 'react'

export default function PopupWindow(){

   const [name, setName] = useState('')
   const [password, setPassword] = useState('')

   const dispatch = useDispatch()

   function nameHandler(event){
      setName(event.target.value)
   }

   function passwordHandler(event){
      setPassword(event.target.value)
   }


   const open = useSelector(state => state.appReducer.openPopupWindow)

   const [error, setError] = useState('')

   function closePopupWindow(){
      dispatch({type:'CLOSE_POPUP'})
   }

   const style = {
      backgroundColor: 'white',
      width: 400 + 'px',
      position:'relative',
      
   }

   function auth(){
      if(user1.name === name && user1.password === password ){
         dispatch({type:'SUCCESS_AUTH'})
         dispatch({type:'JHON_LOGIN'})
         setName('')
         setPassword('')
         setError('')
      }else if(user2.name === name.trim() && user2.password === password.trim()){
         dispatch({type:'SUCCESS_AUTH'})
         dispatch({type:'IVAN_LOGIN'})
         setName('')
         setPassword('')
         setError('')
      }else{
         setError('Неверный логин или пароль')
      }
      
   }


   return(
   <Modal 
      className={classes.popup_window}
      open={open}
      onClose={closePopupWindow}
    >
    <Box sx = {style}>
    <div 
      className={classes.popup_window__close}
      onClick={closePopupWindow}
      >
         <span/>
      </div>
      <h2 className={classes.popup_window__title}>
        Введите пожалуйста логин и пароль
      </h2>  
      <div className={classes.popup_window__inputs_container}>
         <TextField label='Логин' className={classes.popup_window__input} value={name} onChange={nameHandler} />
         <TextField label=' Пароль' className={classes.popup_window__input} value={password} onChange={passwordHandler} type='password' />
      </div>
      <div className={classes.popup_window__button_container}>
      <Button variant='contained' className={classes.popup_window__button} onClick={auth}>Войти</Button>
      <div className={classes.error}>
         {error}
      </div>
      </div>
    </Box>
    </Modal>
   )

}