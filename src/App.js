import React, {Component} from 'react';
import "./App.css";
import "./index.css";
import axios from "axios";




const apiKey= axios.create ({
   baseURL:"https://newsapi.org/v2/top-headlines?country=us&apiKey=2e2afcce570a4797a7bfe6c3efd4f783",
});

 
 class keydex extends Component{

 state = {
 keylist: []

 };

  async componentDidMount() {
 const response = await apiKey.get();

   console.log(response.data.articles);

   this.setState({
    keylist: response.data.articles

   });

  }
  
  render() {
    return (
        
      
      <div className= "box-geral">
        {this.state.keylist.map((item, index) => (
          <div  key={index}>
            <p className= "autor">{item.author}</p>
           <img className="img" src={item.urlToImage} />
           <p className= "box-titulo">{item.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

    
export default keydex;