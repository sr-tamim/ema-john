import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductDetails = () => {
    const { addToCart } = useContext(ProductsContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { img, name, seller, price, stock, category, star, starCount } = product;

    useEffect(() => {
        axios(`https://ema-john-srt.herokuapp.com/product/${id}`)
            .then(({ data }) => setProduct(data))
            .catch(console.dir);
    }, [id])

    return (
        <div className="product">
            <img src={img} alt={name} />
            <div>
                <h3 className="product-name">{name}</h3>
                <p className="product-seller">By: {seller}</p>
                <p className="product-category">Category: {category}</p><br />
                <div className="product-info">
                    <h3 className="product-price">${price}</h3>
                    <p className="product-stock">In stock: {stock}</p>
                    <p className="product-rating">
                        <Rating initialRating={star} emptySymbol="fa fa-star-o icon-color" fullSymbol="fa fa-star icon-color" readonly />
                        <span className="product-star-count">{starCount}</span>
                    </p>

                </div>
                <button className="primary-button" onClick={() => { addToCart(product) }}>
                    <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;