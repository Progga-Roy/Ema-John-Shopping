import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,price,seller,ratings}=props.product;
    // console.log(props)
    
    return (
       
         <div className='product'>
         <img src={img} alt="" srcset="" />
           <div className='product-detail'>
           <p className='product-name'>{name}</p>
            <p> Price: ${price}</p>
            <p>Manufacture : {seller}</p>
            <p>Ratings : {ratings} stars</p>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart </p>
                <FontAwesomeIcon className='icon' icon={faShoppingCart}  ></FontAwesomeIcon>
            </button>
           </div>
         </div>
        
        
    );
};

export default Product;