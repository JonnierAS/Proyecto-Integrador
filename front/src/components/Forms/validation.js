const validation = (userData) =>{
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = "Rick el email no es valido"
    }
    if(!userData.email){
        errors.email= 'Morty te olvidaste del email'
    }
    if(userData.email.length > 35){
        errors.email= "Demasiados caracteres no te pases de 35"
    }
    //password
    if(!/.*\d+.*/.test(userData.password)){
        errors.password="La contraseña debe tener al menos un numero."
    }
    if(userData.password.length < 6 || userData.password.length > 10 ){
        errors.password='Tu password tiene que ser entre 6 y 10 caractéres'
    }
      
    return errors;
};


export default validation;