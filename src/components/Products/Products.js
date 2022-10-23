import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import Product from '../Product/Product';
import './Products.css';
import { Loading } from '../../App';

const Products = () => {
    const { products, searchedText, setSearchedText, page, setPage, totalPage } = useContext(ProductsContext)
    return (
        <>
            <section id="products">
                <h1 className='title'>{searchedText ? `Showing results for "${searchedText}"` : "Products"}</h1>
                {!products.length ? <Loading /> :
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </section>
            <section className="pagination">
                {totalPage > 1 &&
                    [...Array(totalPage).keys()].map(i =>
                        <button key={i} onClick={() => setPage(i)}
                            className={page === i ? 'active' : ''}
                        >{i + 1}</button>)
                }
            </section>
            {searchedText && <section style={{ textAlign: 'center' }}>
                <button onClick={() => setSearchedText(null)}
                    className='primary-button'>View all products</button>
            </section>}
        </>
    );

};

export default Products;