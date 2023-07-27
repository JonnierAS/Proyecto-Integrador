import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from "./components/About";
import Detail from './components/Detail'
import { useState } from 'react';
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import Error from './components/Error404/Error';





function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      // Verifica si el personaje ya está en la lista
      const isCharacterExists = characters.find((character) => character.id === Number(id));
    
      if (isCharacterExists) {
        window.alert('¡El personaje ya se encuentra en la lista!');
      } else {
        // Si el personaje no está en la lista, realiza la búsqueda y agrega el personaje
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        });
      }
    };

   const onClose = (id) => {
      const charactersFilter = characters.filter(character => 
         character.id !== parseInt(id))
      setCharacters(charactersFilter)
   } 

   return (
      <div className='App'>
        <Nav  onSearch={onSearch} />
        
        <Routes >
         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
         <Route path="/about" element={<About />} />
         <Route path='/detail/:id' element={<Detail />} />
         <Route path="*" element={<Error />}/>
      </Routes>
      
      </div>
   );
}

export default App;
