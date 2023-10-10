import style from "./Favorite.module.css"
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {

  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);


  const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event)=>{
    dispatch(filterCards(event.target.value));
  };

  

  return (
    <div>
      <div className={style.container}>

      <select className={style.selector}  onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
      </select>

      <select className={style.selector}  onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>

      </div>

      <h1> My Favorite charts!</h1>

      {myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            onClose={fav.onClose}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
