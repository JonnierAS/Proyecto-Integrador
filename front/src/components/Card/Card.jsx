import style from "./style.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

const Card = ({ id, name, species, gender, image,status, onClose, addFav, removeFav, myFavorites }) => {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({ id, name, species, gender, image, origin, status})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   

   return (
      <div className={style.container}>


         <button className={style.x} onClick={() => onClose(id)}>X</button>
         <button className={style.like} onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
         <img className={style.image} src={image} alt='' />

         <Link to={`/detail/${id}`} textDecoration={"none"}>
            <h2 className={style.cardName}>{name}</h2>
         </Link>

         <h2 className={style.subName}>Specie: {species}</h2>
         <h2 className={style.subName2}>Gender: {gender}</h2>
         {/* <h2>Status: {status}</h2>
         <h2>Origin: {origin}</h2> */}

      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};

export default connect(
   mapStateToProps,
   mapDispatchToProps)
   (Card);