import React, { useEffect, useState } from 'react';
import { addToDB, getFromDB } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import Search from '../Search/Search';
import './Shop.css';

const Shop = () => {

    const [allProducts, setProducts] = useState([]);
    function getProducts() {
        fetch('./fakeData/products.JSON').then(r => r.json()).then(d => setProducts(d));
    }
    useEffect(getProducts, []);

    const [showProducts, setShowProducts] = useState(allProducts);
    useEffect(() => { setShowProducts(allProducts) }, [allProducts]);


    const [cart, setCart] = useState([]);
    useEffect(() => setCart(getFromDB(allProducts)), [allProducts]);

    const addToCart = (product) => addToDB(product, cart, setCart);

    return (
        <div>
            <Search allProducts={allProducts} setShowProducts={setShowProducts} showHideCart={showHideCart} cartItems={cart.length} />

            <div id="shop">

                <Products addToCart={addToCart} showProducts={showProducts} />
                <Cart cart={cart} setCart={setCart} />

            </div>
        </div>
    );
}

const showHideCart = () => {
    document.getElementById('cart').classList.toggle('hide');
}

export default Shop;