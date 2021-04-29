import React, { Component } from 'react'
import axios from 'axios'
import voitures from './Cars'

class CarsDetails extends Component{

    constructor(props){
        super(props)
       this. state={
            idV:0
        }

         
    }
    componentDidMount () {

        // const { match : { params } } = this.props;
        // let id = params.id;
        const id=this.props.match.params.id - 1
        console.log(voitures[id])
        this.setState({idV : id})
        console.log(this.state.idV)

 //preçise à l'ordinateur qu'on veut un lorgement preçis d'ou "id"
}


    render(){
        return(

            <div>
                <label>
                        {voitures[this.state.idV].photo}
                        <h2> marque: {voitures[this.state.idV].marque}</h2>
                        <h2> couleur: {voitures[this.state.idV].couleur}</h2>
                        <h2> places: {voitures[this.state.idV].places}</h2>
                        <h2> annee: {voitures[this.state.idV].annee}</h2>
                        <h2> etat: {voitures[this.state.idV].etat}</h2>
                        <h2> prix: {voitures[this.state.idV].prix}</h2>
                </label>
                <label>
                    <input type="submit" value="Envoyer"/>
                </label>
            </div>
        )

    }


}

export default CarsDetails;