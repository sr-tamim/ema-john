import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import Product from '../Product/Product';
import './Products.css';
import Search from "../Search/Search";

const Products = () => {
    const { products, page, setPage, totalPage } = useContext(ProductsContext)
    return (
        <>
            <Search />
            <section id="products">
                <h2>Products</h2>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </section>
            <section className="pagination">
                {
                    [...Array(totalPage).keys()].map(i =>
                        <button key={i} onClick={() => setPage(i)}
                            className={page === i ? 'active' : ''}
                        >{i + 1}</button>)
                }
            </section>
        </>
    );

};

export default Products;