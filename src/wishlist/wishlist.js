import React, {
    Component
} from 'react';
import './wishlist.css';
import DataServie from '../services/data-service';
import ProductCondensed from '../product-condensed/product-condensed';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';


let ns = new NotificationService();

class WishList extends Component {

    constructor(props) {
        super(props);

        this.state = {wishList:[ 
            /*{title:"Hello", price: 99, _id: "23ednd34je"},
            {title:"how are", price: 999, _id: "sssjjsjsj"},
            {title:"you", price: 9999, _id: "23edndsjjsjsj34je"}*/
            
            
        ]};
        //Bind Functions
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);

    }
    
    //React Lifecycle functions
    
    componentDidMount(){
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }
    
    componentWillUnmount(){
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }
    
    onWishListChanged(newWishList){
        this.setState({wishList: newWishList});
    }
    
    
    createWishList = () => {
        const list = this.state.wishList.map((product)=>
            <ProductCondensed product={product} key={product._id} />                                    
        );
        return (list); 
    }

    render() {
        return ( 
            <div className="card">
                <div className="card-block" >
                <h4 className="card-title" > Wish List < /h4> 
                <ul className="list-group" >
                    {this.createWishList()}
                </ul> 
                </div> 
            </div>
        );
    }
}

export default WishList;