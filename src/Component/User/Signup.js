import React, {useState} from "react";
import axios from "axios";



function Signup(){

    const [user, setuser] = useState({
        userLogin:"login",
        userName: "name",
        userPassWord: "password",
        userEmail:""
    })

    const handleChange=(e)=>{
        let usertempo= user
        usertempo[e.target.name]=e.target.value
    //console.log(user)
    }

    const handleSubmit =(e)=> {
        console.log(user)
        e.preventDefault()
        
        axios.post("https:mamaison.arenaplaza.site/api/User/CreatedUser", user)
        .then(res => {
       console.log(res.data);

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
                            <input  onChange={handleChange} type= "text" name="userLogin"/>
                        </label>
                </div>
                <div>
                    <label>
                    userName
                            <input  onChange={handleChange} type= "text" name="userName"/>
                        </label>
                </div>

                <div>
                    <label>
                    userPassword
                        <input  onChange={handleChange} type= "password" name="userPassWord"/>
                    </label>
                </div>
                <div>
                    <label>
                    userEmail
                        <input  onChange={handleChange} type= "text" name="userEmail"/>
                    </label>
                </div>
                <div>
                    <input onClick= {handleSubmit} type="submit" value="Envoyer"/>
                </div>
            </form>
        </div>
    )
}

export default Signup;