import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';



const Product = (props) => {
    const { name, img, seller, category, price, stock, star, starCount } = props.product;

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
                    </p>
                    <p className="product-star-count">{starCount}</p>

                </div>
                <button className="product-add-button" onClick={() => { props.addToCart(props.product) }}>
                    <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;