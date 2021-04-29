import  React from 'react';
import voitures from './Component/Cars'
import  './App.css'
import 'antd/dist/antd.css';
import {Pagination} from 'antd';
import Main from './Component/Main'
import Header from './Component/Header'
import { Link } from 'react-router-dom';
import Mycars from './Component/Mycars'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends React.Component {

    state={
        title: 'Mon catalogue de voitures',
        currentPage: 1,
        voituresPerPage: 2,
        voitures: [] ,    
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

      DeleteItem = (id)=>{
      console.log(id);
           const posts = this.state.voiture.filter(item => item.id !== id);  
           console.log(posts) 
           this.setState({ voiture:posts }); 
      }         
 
   render(){
    const {
        currentPage,
        voituresPerPage
       } = this.state;

    const indexOfLastLog = currentPage * voituresPerPage;
    const indexOfFirstLog = indexOfLastLog - voituresPerPage;
        return(
            <div>
              <Header/>
                 
               <div><h1>{this.state.title}</h1></div> 
                 <div className="log">{
                      voitures.slice(indexOfFirstLog,indexOfLastLog).map((Cars, index)=>{
                        return(
                          <Mycars key={index} voiture={Cars}/>)
                      }
                      )
                  }
{/* 
          {voitures.map((data) => {
          return(<Mycars voitures={data} deleteitem={this.DeleteItem }/>
                          )
                      } )} 
 */}

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