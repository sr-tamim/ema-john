import React, { useContext } from 'react';
import '../Header/Header.css'
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
import { UserContext } from '../../contexts/UserContext';

const showHideCart = () => {
    document.getElementById('cart').classList.toggle('hide');
}

const Header = () => {
    const { user } = useContext(UserContext);
    const { cart } = useContext(ProductsContext);
    const cartItems = cart.length;

    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <NavLink activeClassName="active" to="/shop">Shop</NavLink>
                {/* <NavLink activeClassName="active" to="/review">Order Review</NavLink> */}
                <NavLink activeClassName="active" to="/inventory">Inventory</NavLink>
                {user ? <NavLink activeClassName="active" to="/profile">Profile</NavLink>
                    : <NavLink activeClassName="active" to="/login">Login</NavLink>}
                <span id="cart-icon">
                    <i className="fas fa-shopping-cart" onClick={showHideCart} ></i>
                    {cartItems > 0 ? <small id="cart-items">{cartItems}</small> : ''}
                </span>
            </nav>
        </header>
    );
};

export default Header;