import { useDispatch, useSelector } from 'react-redux'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/system'
import classes from './PopupWindow.module.scss'
import { Button, TextField } from '@mui/material'

export default function PopupWindow(){

   const open = useSelector(state => state.appReducer.openPopupWindow)

   const dispatch = useDispatch()

   function closePopupWindow(){
      dispatch({type:'CLOSE_POPUP'})
   }

   const style = {
      backgroundColor: 'white',
      width: 400 + 'px',
      position:'relative',
      
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
         Добро пожаловать, введите пожалуйста логин и пароль
      </h2>  
      <div className={classes.popup_window__inputs_container}>
         <TextField label='Логин' className={classes.popup_window__input} />
         <TextField label=' Пароль' className={classes.popup_window__input} />
      </div>
      <div className={classes.popup_window__button_container}>
      <Button className={classes.popup_window__button}>Войти</Button>
      </div>
    </Box>
    </Modal>
   )

}