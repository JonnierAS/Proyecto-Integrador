import { NavLink } from "react-router-dom";
import img from "../img/yo.jpg"
const About = () => {
    return (
        <div>
            
            <h1>Sobre el creador!</h1>
            <h2>Jonnier Salaverria</h2>
            <img src={img} alt="imagen" width="200px" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Dolorem minus facilis nesciunt ex eaque animi, error 
            <br />dolorum obcaecati minima optio non! Ratione rerum illum 
            <br />magnam nulla impedit autem alias delectus.</p>

        </div>
    )
}

export default About;