import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import Cars from './Cars'
import CarsDetails from './CarsDetails'





class Mycars extends React.Component{

    constructor(props){
    super(props)
    this.state={isFavoriteLog:false
    }

    }

    handleFavoritelog = (e) => {
        let img= e.target.src
        let response=/border/.test(img)
        console.log(response)
        if (response )
        e.target.src="/images/ic_favorite.png"
        else
        e.target.src="/images/ic_favorite_border.png"

    }   

    // componentDidMount(){
    //     console.log("Cars : " + this.props.voiture.id)
    //     this.state={favoritesCar:[]}
    //     const favoriteLogIndex = this.props.favoritesCar.findIndex(item => item.id === this.props.voiture.id)
    //     if(favoriteLogIndex !== -1){
    //         this.setState({isFavoriteLog: true})
    //     }
    // }

       
    render() {
        //console.log(this.state.isFavoriteLog)
            const voiture=this.props.voiture;
    return(
        <div className="label">
                
                <Link to = {"/CarsDetails/"+voiture.id}><div className="img">{voiture.photo}</div></Link>
                <div><label>marque:{voiture.marque}</label></div>
                <div><label>couleur :{voiture.couleur} </label></div>
                <div><label>places :{voiture.places} </label></div>
                <div><label>annee :{voiture.annee}</label></div>
                <div><label>etat :{voiture.etat}</label></div>
                <div><label>prix :{voiture.prix}</label></div>
            <div>
                  
                <img onClick={this.handleFavoritelog} src={"/images/ic_favorite_border.png"}/> 
            </div>
            {/* <div>
                              
                              <span className="delete-button" onClick={() => (this.props.deleteitem(liste.id))}>
                     <MdDelete></MdDelete>
                 </span>
                 <Link to={"/LogementModifier/"+liste.id}>
                 <span 
                     className="modifier-button" >
                     <MdCreate></MdCreate>
                 </span></Link>

            </div> */}
        
        </div>
    )
    }

}

export default Mycars;