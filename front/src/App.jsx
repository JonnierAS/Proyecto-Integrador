import "./App.css";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error404/Error";
import Form from "./components/Forms/Form";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// const URL_BASE =  "https://rym2-production.up.railway.app/api/character"
// const API_KEY = "key=henrym-jonnieras"

// const EMAIL = "jonnier17@gmail.com"
// const PASSWORD = "123asd"

function App() {
  const [characters, setCharacters] = useState([]);
  const locations = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  /* function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  } */

  const login = async (userData) => {
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      // Verifica si el personaje ya está en la lista
      const isCharacterExists = characters.find((character) => character.id === Number(id));
      if (isCharacterExists) {
        window.alert("¡El personaje ya se encuentra en la lista!");
      } else {
        // Si el personaje no está en la lista, realiza la búsqueda y agrega el personaje
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter(
      (character) => character.id !== Number(id)
      );
      setCharacters(charactersFilter);
    };
    
    return (
      <div className="App">
      {locations.pathname !== "/" && (
        <Nav onSearch={onSearch} setAccess={setAccess} />
        
        )}
      
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
