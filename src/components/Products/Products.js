import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    function getProducts() {
        fetch('./fakeData/products.JSON').then(r => r.json()).then(d => setProducts(d));
    }
    useEffect(getProducts, []);
    console.log(products);

    return (
        <div id="products">
            <h3>Products</h3>
            {
                products.map(product => <Product key={product.key} product={product} addToCart={props.addToCart} />)
            }
        </div>
    );

};

export default Products;