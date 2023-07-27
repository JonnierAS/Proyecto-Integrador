import { Link } from "react-router-dom";

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         
         <Link to={`/detail/${id}`} >
            <h2 className="card-name">{name}</h2>
         </Link>
         
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Status: {status}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='' />
         
      </div>
   );
}


export default Card;