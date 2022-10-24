import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import Product from '../Product/Product';
import './Products.css';
import { Loading } from '../../App';

const Products = () => {
    const { products, searchedText, setSearchedText, page, setPage, totalPage } = useContext(ProductsContext)
    return (
        <>
            {searchedText && <h2 className='products-title'>{`Showing results for "${searchedText}"`}</h2>}
            <section id="products">
                {!products.length ? <Loading /> :
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </section>
            {totalPage > 1 && <section className="pagination">
                {[...Array(totalPage).keys()].map(i =>
                    <button key={i} onClick={() => setPage(i)}
                        className={page === i ? 'active' : ''}
                    >{i + 1}</button>)
                }
            </section>}
            {searchedText && <section style={{ textAlign: 'center' }}>
                <button onClick={() => setSearchedText(null)}
                    className='primary-button'>View all products</button>
            </section>}
        </>
    );

};

export default Products;