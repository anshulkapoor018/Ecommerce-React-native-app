import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

  //The moment the component is loaded the constructor will be called
  constructor(props){
    super(props);

    //Bind Functions
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Swag Shop</h2>
        </div>
        <div className="container App-main">
          <div className="row">
          <Product className="col-sm-4" title="Note 8" price="79,999" imgUrl="https://images-na.ssl-images-amazon.com/images/I/41GZvrGM5bL.jpg"/>
          <Product className="col-sm-4" title="Note 8" price="79,999" imgUrl="https://images-na.ssl-images-amazon.com/images/I/41GZvrGM5bL.jpg"/>
          <Product className="col-sm-4" title="Note 8" price="79,999" imgUrl="https://images-na.ssl-images-amazon.com/images/I/41GZvrGM5bL.jpg"/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
