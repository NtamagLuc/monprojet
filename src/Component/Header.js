import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'


function Header() {
    return(
        <div>
            <div class="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-item"><Link to ="/Login" className="nav-link px-2 link-dark">Connexion</Link></li>
                    <li className="nav-item"><Link to ="/AddCars" className="nav-link px-2 link-dark">Ajouter une voiture</Link></li>
                    </ul>
                </header>
                </div>
        </div>
    )
    

}

export default Header;