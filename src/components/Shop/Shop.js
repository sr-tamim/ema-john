import React, { useEffect, useState } from 'react';
import { addToDB, getFromDB } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = props => {
    const { allProducts } = props;
    // const [getCart, setGetCart] = useState([]);
    // useEffect(() => { setGetCart(getFromDB(allProducts)) }, [allProducts]);

    const [cart, setCart] = useState([]);
    useEffect(() => setCart(getFromDB(allProducts)), [allProducts]);

    const addToCart = (product) => addToDB(product, cart, setCart);

    return (
        <div id="shop">

            <Products addToCart={addToCart} showProducts={props.showProducts} />
            <Cart cart={cart} />

        </div>
    );
}

export default Shop;