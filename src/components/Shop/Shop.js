import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    }
    console.log(cart);

    return (
        <div id="shop">

            <Products addToCart={addToCart} />
            <Cart cart={cart} />

        </div>
    );
}

export default Shop;