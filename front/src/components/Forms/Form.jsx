import styleForm from "./Form.module.css";
import validation from "./validation";
import img from "./login.png"
import img2 from "./nave.png"
import { useState} from "react";


const Form = ({login})=>{
    
    const [errors, setError] = useState({})
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })


    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setError(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
    };
    

    return(
        <div>
            <span className="icon-close"><ion-icon name="close-outline"></ion-icon></span>
          <div>
             <img className={styleForm.img2} src={img2} alt="nave"  />
              <form onSubmit={handleSubmit} className={styleForm.form}>
                <img className={styleForm.img} src={img} alt="img"  />
                <label htmlFor="email"> Email: </label>
                <input value={userData.email} onChange={handleChange} type="email" name="email" placeholder="example@mail.com"/>
                {errors.email && <p className={styleForm.errors}>{errors.email}</p>}
                    <br />

                 <label htmlFor="password"> Password: </label>
                 <input value={userData.password} onChange={handleChange} type="password" name="password" placeholder="password"/>   
                 {errors.password && <p className={styleForm.errors}>{errors.password}</p>}
                 <br />

                    <button className="btn" type="submit">Submit</button>
            </form>
        
          </div>
          
          {/* <div className={styleForm.formregister}>
            <form action="" className={styleForm.form}>
            <h2>Registration</h2>
            <img className={styleForm.img} src={img} alt="img"  />
                <label htmlFor="email"> Email: </label>
                <input name='email' placeholder="example@mail.com" onChange={(e)=>handleChange(e)}/>
                <br /><br />
                <label htmlFor="password"> Password: </label>
                <input name='password' type="password" placeholder="password" onChange={(e)=>handleChange(e)}/>
            
                <div className="remember-forgot">
                    <label><input type="checkbox" /> 
                    I agree to the terms & conditions</label>
                </div>
                <button type="submit" className="btn">Register</button>
                <div className="login-register">
                    <p>Already have an account?<a href="#" className="login-link">Login</a></p>
                </div>
            </form>
          </div> */}

          </div>
    )
};

export default Form;