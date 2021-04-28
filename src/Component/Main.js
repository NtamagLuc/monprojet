import Login from './User/Login'
import Signup from './User/Signup'
import AddCars from './AddCars'
import CarsDetails from './CarsDetails'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Accueil from "./Accueil.js"
import App  from "../App.js";



function Main() {
    return (
        <div>    
       <BrowserRouter>

       <Accueil/>

        <Switch>

       <Route path="/AddCars">

           <AddCars/>

           </Route>

        <Route path = "/App">

            <App/>

        </Route>
        
        <Route path = "/Signup">

            <Signup/>

        </Route>

        <Route path = "/Login">

            <Login/>

        </Route>

        <Route path="/CarsDetails/:id" component={CarsDetails}/>

         </Switch>

        </BrowserRouter>
    
    
        </div>
    )
}
export default Main;