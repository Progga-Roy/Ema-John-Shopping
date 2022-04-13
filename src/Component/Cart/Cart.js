import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
         total = total + product.price
         shipping = shipping + product.shipping
      }
      const tax = parseFloat((total *10/100).toFixed(2));
      const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
             <h5>Order summary</h5>
                <p>Selected Items : {cart.length}</p>
                <p>Total price : $ {total}</p>
                <p>Total shipping : {shipping}</p>
                <p>Tax : {tax} </p>
                <h4>Grand total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;