import axios from "axios";
import styled from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL_BASE =  "https://rym2-production.up.railway.app/api/character"
// const API_KEY = "key=henrym-jonnieras"

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(
      `http://localhost:3001/rickandmorty/character/${id}` /* `${URL_BASE}/${id}?${API_KEY}` */
    )
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styled.container}>
      {/* optional chaining */}
      <img
        className={styled.img}
        src={character?.image}
        alt={character?.name}
      />

      <div className={styled.detail}>
        <h1>{character?.name}</h1>
        <h2>STATUS| {character?.status}</h2>
        <h2>SPECIE| {character?.species}</h2>
        <h2>GENDER| {character?.gender}</h2>
        <h2>ORIGIN| {character?.origin?.name}</h2>
      </div>
    </div>
  );
};

export default Detail;
