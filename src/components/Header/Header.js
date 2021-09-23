import React from 'react';
import '../Header/Header.css'
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
            </nav>
        </header>
    );
};

export default Header;