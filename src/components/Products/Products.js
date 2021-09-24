import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = (props) => {
    return (
        <div id="products">
            <h3>Products</h3>
            {
                props.showProducts.map(product => <Product key={product.key} product={product} addToCart={props.addToCart} />)
            }
        </div>
    );

};

export default Products;