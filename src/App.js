import  React from 'react';
import voitures from './Component/Cars'
import  './App.css'
import 'antd/dist/antd.css';
import {Pagination} from 'antd';
import Main from './Component/Main'

class App extends React.Component {

    state={
        title: 'Mon catalogue de voitures',
        currentPage: 1,
        voituresPerPage: 2,
        voitures: []      
    }

    handleChange = value => {
        this.setState({
          currentPage: value
        });
      };
    
    handleSelectChange = e => {
        this.setState({
          voituresPerPage: e.target.value,
          currentPage: 1
        });
      };   
 
   render(){

    const {
        currentPage,
        voituresPerPage
       } = this.state;

    const indexOfLastLog = currentPage * voituresPerPage;
    const indexOfFirstLog = indexOfLastLog - voituresPerPage;
        return(
            <div>
                  <div>
                    <Main/>
                  </div>
               <div><h1>{this.state.title}</h1></div> 
                 <div className="log">{
                      voitures.slice(indexOfFirstLog,indexOfLastLog).map((voiture, index)=>{
                        return(
                           <div className="label" key={index}>
                                <div className="img">{voiture.photo}</div>
                                <div><label> Marque: {voiture.marque}</label></div>
                                <div><label>Couleur : {voiture.couleur} </label></div>
                                <div><label>places : {voiture.places} </label></div>
                                <div><label>annee : {voiture.annee}</label></div>
                                <div><label>etat : {voiture.etat}</label></div>
                                <div><label>prix : {voiture.prix}</label></div>
                           </div>
                        )
                        
                    
                      }
                      )
                  }


                  </div>
                  <div className="pagination_div">
    <Pagination className="pagination"
    defaultCurrent={this.state.currentPage}
    defaultPageSize={this.state.voituresPerPage} //default size of page
    pageSize={this.state.voituresPerPage}
    onChange={this.handleChange}
    total={/*loadingOk && */voitures.length > 0 && voitures.length} //total number of card data available
    />

    <div>
    <select
        value={this.state.voituresPerPage}
        onChange={this.handleSelectChange}
    >
        <option>2</option>
        <option>4</option>
        <option>6</option>
        <option>8</option>
    </select>
    </div>
    </div>

            </div>


        )



   }
}

	export default App;