import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import '../App.css'



class AddCars extends Component{

    constructor(props){
        super(props)
       this.state={
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
            file:[],
            fileimageUpload:[]
        }
           
    }

    handleChange = (e)=> {
        let newtab=this.state.tabvoitures
        newtab[e.target.name]=e.target.value
        this.setState({tabvoitures:newtab});
        console.log(newtab)
    
         if ((e.target.name === "image") && (this.state.file.length < 4) && (e.target.files.length>0)) {// condition de ne pas exceder 4 images
              
         let imgtmp = this.state.file;
            
        
        imgtmp.push(e.target.files[0]) 
        console.log(imgtmp)
        
        //il recupere les name dans les input et les associe au valeur entre dans celle ci
        
        this.setState({
         file: imgtmp,
        
         });
         e.preventDefault();
    }
}
              
            

       handleSubmit = (e)=> {
            e.preventDefault();
            const newData = {
            value: this.state.tabvoitures
            };
            this.setState({tabvoitures:newData})
        }

        remove=(e)=>{
            e.preventDefault();
            const del={
                value:this.state.tabvoitures
            };
            this.setState({tabvoitures:del})
        }

    render(){

        return(
            <div>
                <form  className="label" onSubmit={this.handleSubmit}>
                <div>
                    <label>
                            marque
                                    <select onChange = {this.handleChange} name ="marque" value = {this.state.tabvoitures["marque"]}>
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
                            couleur
                                    <select onChange = {this.handleChange} name = "couleur" value = {this.state.tabvoitures["couleur"]}>
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
                                    <select onChange = {this.handleChange} name = "places" value = {this.state.tabvoitures["places"]}>
                                            <option>2</option>
                                            <option>4</option>
                                            <option>6</option>
                                    </select>
                        </label>
                        <div>
                            <input onClick={this.handleSubmit} type="Submit" value="Envoyer"/>
                        </div>
                        <div>
                            <label>
                                    Choisissez une image
                            <input type="file" className="img-vis" name="image" onChange={this.handleChange} />
                                </label>
                        
                        { 
                        this.state.file.map((urlimg, index) => {
                        return <div key={index}>
                            <button type="button" onClick={this.remove} >del</button>
                            <img src={URL.createObjectURL(urlimg)} alt="" width='100' height='100' />
                        </div>
                        })}
                        </div>

                        </div>
                </form>
            </div>
        )
    }
}

export default AddCars;