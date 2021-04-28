import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Link } from "react-router-dom"


function Header() {
    return(
        <div>
            <Link to ="/Login">
                <button> connectez-vous</button>
            </Link> 
       
            <Link to ="/AddCars">
                <button> ajoutez un vehicule</button>
            </Link> 
        </div>
    )
    

}

export default Header;