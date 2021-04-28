import React, { Component } from 'react'
import axios from 'axios'


class CarsDetails extends Component{

    constructor(props){
        super(props)
       this. state={
            value :'',
            tabvoitures: {
                marque:"",
                couleur:"",
                places: "",
                annee:"",
                etat:"",
                prix:"",
                photo:""
            },
            carDetail : {

            }
        }

         
    }
    // handleFavoritelog = () => {
    //     const action = { type: "TOGGLE_FAVORITE", value: this.state.CarsDetails };
    //      this.props.dispatch(action);
    //      this.setState({
    //        isFavorite: !this.state.isFavorite
    //      });
    //      console.log(this.props.favoritesLog)

    //    }

    componentDidMount () {

        const { match : { params } } = this.props;
        let id = params.id;

 //preçise à l'ordinateur qu'on veut un lorgement preçis d'ou "id"

        axios.get("https://mamaison.arenaplaza.site/api/Room/GetRoomDetail/"+id).then(res => {
           // const user=res.data
            // localStorage.setItem('token',user.userTokeng)
            const carInfo = res.data;
            // console.log(carInfo)
            this.setState ({carDetail : carInfo});
            // console.log(id)
            // const favoriteLogIndex = this.props.favoritesLog.findIndex(item => item.id !== id)
            // if(favoriteLogIndex !== -1){
            //     this.setState({isFavorite: true})
            // }
 
    })
}


    render(){
        return(

            <div>
                <label>
                        <h2> marque: {this.state.CarsDetails.marque}</h2>
                        <h2> couleur: {this.state.CarsDetails.couleur}</h2>
                        <h2> places: {this.state.CarsDetails.places}</h2>
                        <h2> annee: {this.state.CarsDetails.annee}</h2>
                        <h2> etat: {this.state.CarsDetails.etat}</h2>
                        <h2> prix: {this.state.CarsDetails.prix}</h2>
                </label>
                <label>
                    <input type="submit" value="Envoyer"/>
                </label>
            </div>
        )

    }


}

export default CarsDetails;