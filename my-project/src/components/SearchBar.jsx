import { useState } from 'react';

const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   };
   
   const agregar = () => onSearch(id)
   
   return (
      <div>
         <input type='search' onChange={handleChange} value={id}  />
         <button onClick={agregar}>Agregar</button>
         
      </div>
   );
}


export default SearchBar;