import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Button, TextField, TextareaAutosize } from '@mui/material'
import { posts } from '../../../db/usersDB'
import classes from './News.module.scss'


export default function News(){

   const [inputValue, setInputValue] = useState('')
   const [textAreaValue, setTextAreaValue] = useState('')
   const [error, setError] = useState('')
   const searchValue = useSelector(state => state.newsFilter)

   
   const authentication = useSelector(state => state.appReducer.auth)

   const dispatch = useDispatch()


   const appPosts = posts.filter(posts => posts.title.includes(searchValue))

   
   function search(event){
      dispatch({type:'FIND_NEWS', payload:(event.target.value).toUpperCase()} )
   }

   



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


   return(
      <div className={classes.news}>
         <h2 className={classes.news__title}>Новости</h2>
         <input className={classes.news__search} placeholder='Поиск новости' value={searchValue} onChange={search} />
         <ul className={classes.news__list}>
            {appPosts.map((item, i) =>{
               return(
               <li className={classes.news__list_item} key={i} >
                  <h2 className={classes.news__list_item__title}>{item.title}</h2>
                  <p className={classes.news__list_item__subtitle}>{item.description}</p>
                  <span className={classes.news__list_item__date}>{item.date}</span>
               </li>
               )
            })}
         </ul>
         {
            authentication 
            ?
            <div className={classes.news__add__container}>
            <h2 className={classes.news__add_news}>Добавление поста</h2>
            <TextField className={classes.news__add_news__title} label='Заголовок новости' value = {inputValue} onChange={event => setInputValue((event.target.value).toUpperCase())}  />
            <TextareaAutosize className={classes.news__add_news__subtitle} rows = '3' value={textAreaValue} onChange={event => setTextAreaValue(event.target.value)} placeholder='Введите текст новости' />
            <Button className={classes.news__add_news__button} onClick={addPost} >Добавить новость</Button>
             <div className={classes.error}>{error}</div>
            </div>
            : 
            <div className={classes.news__no_auth}>
                  <p className={classes.news__no_auth_message}>Чтобы добавить новость войдите в систему</p>
            </div>
         }
      </div>
   )
}