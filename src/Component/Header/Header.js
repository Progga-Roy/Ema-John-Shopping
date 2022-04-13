import React from 'react';
import logo from '../../images/Logo.svg'
import '../Header/Header.css'

const Header = () => {
    return (
        <div>
           <nav className='header'>
               <img src={logo} alt="" />
               <div>
                   <a href="/shop">Shop</a>
                   <a href="/order">Orders</a>
                   <a href="/inventory">Inventor</a>
                   <a href="/about">About</a>
               </div>
           </nav>
        </div>
    );
};

export default Header;