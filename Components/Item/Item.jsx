import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
// import product from '../Breadcrumbs/Breadcrumbs';


const Item = (props) => {

  return (
    <div className="item">
        {/* here the Link component is used to link the Item to the products page, we get the product id 
        from Product page through props */}
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price}
            </div>
            <div className="item-price-old">
                {props.old_price}
            </div>
        </div>
    </div>
  );
}

export default Item