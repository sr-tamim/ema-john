import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = (props) => {
    return (
        <div id="products">
            <h2>Products</h2>
            {
                props.showProducts.map(product => <Product key={product.key} product={product} addToCart={props.addToCart} />)
            }
        </div>
    );

};

export default Products;