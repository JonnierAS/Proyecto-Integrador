import { NavLink } from 'react-router-dom';
import Card from './Card';


export default function Cards({characters, onClose, id}) {
   return (
         <div >
           
            
            {
               
               characters.map(({ id, name, status, species, gender, origin, image}) => {
                  return(
                     <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     onClose={onClose}
                     />
                  )
               })
            }
            
         </div>
   )
}
