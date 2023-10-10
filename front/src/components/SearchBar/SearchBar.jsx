import style from "./style.module.css"
import { useState } from 'react';

const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   };

   const handleRandom = () => {
      let idRandom = Math.floor(Math.random() * (826)) + 1
      onSearch(idRandom)
   }
   
   const agregar = () => onSearch(id)
   
   return (
      <div className={style.container} >
         <input className={style.input} type='search' onChange={handleChange} value={id}  />
         <button className={style.btn}  onClick={agregar}>Agregar</button>
         <button className={style.btn} onClick={handleRandom}>Random</button>
      </div>
   );
}


export default SearchBar;