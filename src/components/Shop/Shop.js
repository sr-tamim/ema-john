import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = props => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    return (
        <div id="shop">

            <Products addToCart={addToCart} showProducts={props.showProducts} />
            <Cart cart={cart} />

        </div>
    );
}

export default Shop;