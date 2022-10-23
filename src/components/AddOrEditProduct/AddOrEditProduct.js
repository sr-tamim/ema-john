import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { ProductsContext } from '../../contexts/ProductsContext';
import "./AddOrEditProduct.css";
import { UserContext } from '../../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import { Loading } from '../../App';

const AddOrEditProduct = ({ method }) => {
    const { user } = useContext(UserContext)
    const { getProducts } = useContext(ProductsContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { name, seller, price, stock, category, star, starCount } = product || {};

    useEffect(() => {
        axios(`https://ema-john-server.netlify.app/.netlify/functions/server/product-info/${id}`)
            .then(({ data }) => setProduct(data))
            .catch(console.dir);
    }, [id])

    const formInputs = {
        name: useRef(),
        seller: useRef(),
        stock: useRef(),
        category: useRef(),
        star: useRef(),
        starCount: useRef(),
        price: useRef()
    }

    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedProduct = {};
        Object.keys(formInputs).forEach(key => {
            updatedProduct[key] = formInputs[key].current.value;
        })
        axios.post(`https://ema-john-server.netlify.app/.netlify/functions/server/update-product/${id}`, updatedProduct)
            .then(({ data }) => data.modifiedCount > 0 && history.push('/inventory'))
            .then(() => getProducts());
    }

    return (!product ? <Loading /> :
        <div className="product-update" >
            <h1 className="heading">{method} product</h1>
            <h5>Product id: {id}</h5>
            <form onSubmit={handleSubmit} className="product-edit-form primary-form">
                <div>
                    <label>Name</label>
                    <input type="text" ref={formInputs.name} defaultValue={name} required /></div>
                <div>
                    <label>Seller</label>
                    <input type="text" ref={formInputs.seller} defaultValue={seller} required /></div>
                <div>
                    <label>Price</label>
                    <input type="number" ref={formInputs.price} defaultValue={price} step={0.01} required /></div>
                <div>
                    <label>In stock</label>
                    <input type="number" ref={formInputs.stock} defaultValue={stock} required /></div>
                <div>
                    <label>Category</label>
                    <input type="text" ref={formInputs.category} defaultValue={category} required /></div>
                <div>
                    <label>Rating</label>
                    <input type="number" ref={formInputs.star} defaultValue={star} max={5} min={0} step={0.1} required /></div>
                <div>
                    <label>Rated by</label>
                    <input type="number" ref={formInputs.starCount} defaultValue={starCount} required /></div>
                {method === 'Edit' && <input type="submit" value="Update" className="primary-button"
                    disabled={user && !process.env.REACT_APP_ADMIN_ACCOUNTS.split('&').includes(user.email)} />}
                <small>Update button is only available for admins</small>
            </form>
        </div>
    );
};

export default AddOrEditProduct;