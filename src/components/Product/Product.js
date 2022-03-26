import React, { useContext } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';



const Product = ({ product }) => {
    const { _id, name, img, seller, category, price, stock, star, starCount } = product;
    const { addToCart } = useContext(ProductsContext);

    return (
        <div className="product">
            <img src={img} alt={name} />
            <div>
                <h3 className="product-name">{name}</h3>
                <div className='product-details'>
                    <b>Company:</b> {seller}
                    <b>Category:</b> {category}
                </div>
                <div className="product-info">
                    <h3 className="product-price">${price}</h3>
                    <p className="product-stock">In stock: {stock}</p>
                    <p className="product-rating">
                        <Rating initialRating={star} emptySymbol="fa fa-star-o icon-color" fullSymbol="fa fa-star icon-color" readonly />
                        <span className="product-star-count">{starCount}</span>
                    </p>

                </div>
                <div className='product-action-buttons'>
                    {window.location.pathname !== '/inventory' &&
                        <button className="primary-button" onClick={() => { addToCart(product) }}>
                            <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
                            Add to Cart
                        </button>
                    }
                    <NavLink className="primary-button" to={`/product/${_id}`}>
                        View
                    </NavLink>
                    {window.location.pathname === '/inventory' &&
                        <NavLink className="primary-button" to={`/product/update/${_id}`}>
                            Update
                        </NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;