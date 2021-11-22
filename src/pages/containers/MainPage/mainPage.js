import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { posts } from '../../../db/usersDB'
import classes from './MainPage.module.scss'

export default function MainPage(){

   const username = useSelector(state => state.appReducer.username)

   const authentication = useSelector(state => state.appReducer.auth)




   const dispatch = useDispatch()



   const [inputValue, setInputValue] = useState('')
   const [textAreaValue, setTextAreaValue] = useState('')
   const [error, setError] = useState('')
   // const [searchValue, setSearchValue] = useState('')
   const searchValue = useSelector(state => state.newsFilter)


   function addPost(){
      if(inputValue !== '' && textAreaValue !== ''){
         posts.push({
            title: inputValue.trim(),
            description: textAreaValue.trim(),
            date:`${new Date().getDate()}.${new Date().getMonth()}.${new Date().getUTCFullYear()}  `
         })
         setInputValue('')
         setTextAreaValue('')
         setError('')
      } else{
         setError('Все поля должны быть заполнены')
      }
     
   } 

   function search(event){
      dispatch({type:'FIND_NEWS', payload:event.target.value} )
      console.log(searchValue);
   }


   return(
      <div className={classes.main_page}>
         <h2>
         {
            username 
            ? ` Привет, ${username}`
            : ' Привет, Гость'
         }
        
         </h2>
         <h2>Новости</h2>
         <input placeholder='Поиск новости' value={searchValue} onChange={search} />
         <ul className={classes.main_page__list}>
            {posts.map((item, i) =>{
               return(
               <li className={classes.main_page__list_item} key={i} >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span>{item.date}</span>
               </li>
               )
            })}
         </ul>
         {
            authentication 
            ?
            <>
            <h2>Добавление поста</h2>
            <TextField label='Заголовок новости' value = {inputValue} onChange={event => setInputValue(event.target.value)} />
            <textarea rows = '3' value={textAreaValue} onChange={event => setTextAreaValue(event.target.value)} placeholder='Введите текст новости' />
           <Button onClick={addPost} >Добавить новость</Button>
          <div className={classes.error}>{error}</div>
            </>
           : null
       
         }

      </div>
   )
}