import React, { useContext } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
import { UserContext } from '../../contexts/UserContext';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';

const showHideCart = () => {
    document.getElementById('cart').classList.toggle('hide');
}

const Navbar = () => {
    const { user } = useContext(UserContext);
    const { cart } = useContext(ProductsContext);
    const cartItems = cart.length;

    return (
        <>
            <nav>
                <div className="nav-container">
                    <div id='nav-links'>
                        <NavLink exact activeClassName="active" to="/">Shop</NavLink>
                        {/* <NavLink activeClassName="active" to="/review">Order Review</NavLink> */}
                        <NavLink activeClassName="active" to="/inventory">Inventory</NavLink>
                        {user ? <NavLink activeClassName="active" to="/profile">Profile</NavLink>
                            : <NavLink activeClassName="active" to="/login">Login</NavLink>}
                        <span id="cart-icon" onClick={showHideCart} >
                            <i className="fas fa-shopping-cart"></i>
                            {cartItems > 0 ? <small id="cart-items">{cartItems}</small> : ''}
                        </span>
                    </div>
                    <Search />
                    <Cart />
                </div>
            </nav>
        </>
    );

};

export default Navbar;