import React, {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"



function Login(){


    const [login, setLogin] = useState({
        userLogin:"",
        userPassWord:""
    })

    const handleChange=(e)=>{
        let loginTempo= login;
        loginTempo[e.target.name]=e.target.value
        console.log(login)
    }

   const handleSubmit=(e)=>{
            console.log(login)
             e.preventDefault()
             
             axios.post('https://mamaison.arenaplaza.site/api/User/Authentificate',login)
             .then(res => { 
                 const user=res.data
                 localStorage.setItem('token',user.userTokeng)
            console.log(res.data);
            console.log(localStorage.getItem('token'))
     
     }).catch(erreur =>{
     //On traite ici les erreurs éventuellement survenues
     alert("serveur indisponible")
     console.log(erreur);
     });

    }


    return(
        <div>
            <form>
                <div>
                    <label>
                    userLogin
                    <input onChange={handleChange} type= "text" name= "userLogin"/>
                    </label>
                </div>
                <div>
                    <label>
                    userPassWord
                    <input onChange={handleChange} type= "password" name= "userPassWord"/>
                    </label>
                </div>
                <div>
                    <input onClick={handleSubmit} type="submit" value="Envoyer"/>
                 </div>
            </form>
            <Link to ="/Signup">
                Si vous n'avez pas encore de compte <button>Inscrivez-vous</button>
            </Link>
        </div>

    )

}

export default Login;