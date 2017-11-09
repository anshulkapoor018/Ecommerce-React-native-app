import React, {Component} from 'react';
import './product-condensed.css';

import DataService from '../services/data-service';


let ds = new DataService();

class ProductCondensed extends Component {
    
    constructor(props){
        super(props);
        
        //Bind
        this.removeProduct = this.removeProduct.bind(this);
    }
    
    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }
    
  render(){
    return(
        <li className="list-group-item pc-condensed">
            <p>{this.props.product.title} | <b>₹{this.props.product.price}</b></p>
            <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
        </li>
        
    );
  }
}

export default ProductCondensed;

