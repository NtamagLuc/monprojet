import Signup from "../Component/User/Signup"
import Login from "../Component/User/Login"
import { Link } from "react-router-dom"

function Accueil(){
    return(
        
        <div>
            
            <Link to ="/App">
                <button>Acceuil</button>
            </Link>

            <Link to ="/Signup">
                <button> connectez-vous</button>
            </Link>

            <Link to ="/Login">
            <button> connectez-vous</button>
            </Link>
            
            <Link to ="/Addcars">
                <button>ajoutez une voiture</button>
            </Link>


            
        </div>
    )
}
export default Accueil;