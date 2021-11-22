export default function SearchNews(){


   const [value, setValue] = ''

   return(
      <div>
         <input value = {value} onChange={event => setValue(event.target.value)}  />
      </div>
   )
}