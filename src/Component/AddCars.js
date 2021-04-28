import React, { Component } from 'react'



class AddCars extends Component{

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
            }
        
        }
    }

    
    handleChange = (e) => {
        // if (e.target.name === "mesImages"){
        //      console.log("selection des fichiers")
        //     //on fait une copie des tableaux qui sont déjà dans le state (file & fileimageUpload)
        //     let logtmp= this.state.file
        //    //on ajoute un nouveau fichier dans les nouveaux tableaux temporaires
        //       logtmp.push(e.target.files[0])
            
        //         //on met à jour le state
        //       this.setState({
        //           file:logtmp
        //       })
        // }
        let cartempo= this.state.tabvoitures
        cartempo[e.target.name]=e.target.value
              
}


    render(){

        return(
            <div>
                <form>

                    <div>
                    <label>
                            marque
                                    <select onChange = {this.handleChange} name = " marque" value = {this.state.tabvoitures["marque"]}>
                                            <option>Bmw</option>
                                            <option>Audit</option>
                                            <option>Tesla</option>
                                            <option>Mercedes</option>
                                            <option>Renault</option>
                                            <option>Nissan</option>
                                            <option>Opel</option>
                                            <option>Toyota</option>
                                            <option>Ford</option>
                                            <option>Hyundai</option>
                                    </select>
                        </label>
                    </div>
                    <div>
                    <label>
                            marque
                                    <select onChange = {this.handleChange} name = " couleur" value = {this.state.tabvoitures["couleur"]}>
                                            <option>noir</option>
                                            <option>gris</option>
                                            <option>blanc</option>
                                            <option>rouge</option>
                                            <option>bleu</option>
                                            <option>jaune</option>
                                            <option>vert</option>
                                    </select>
                        </label>
                    </div>
                    <div>
                    <label>
                            places
                                    <select onChange = {this.handleChange} name = " places" value = {this.state.tabvoitures["places"]}>
                                            <option>2</option>
                                            <option>4</option>
                                            <option>6</option>
                                    </select>
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddCars;