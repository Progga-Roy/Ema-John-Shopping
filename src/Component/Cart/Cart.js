import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h5>Order summary</h5>
                <p>Selected Items : {cart.length}</p>
        </div>
    );
};

export default Cart;