import style from "./About.module.css"
import img from "./yo.jpg"
const About = () => {
    return (
        <div className={style.container}>
            
            <h1>Sobre el creador!</h1>
            <h2>Jonnier Salaverria</h2>
            <img className={style.img} src={img} alt="imagen"  />
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Dolorem minus facilis nesciunt ex eaque animi, error 
            <br />dolorum obcaecati minima optio non! Ratione rerum illum 
            <br />magnam nulla impedit autem alias delectus.</p>

        </div>
    )
}

export default About;