import React from 'react';
import './Search.css';

const Search = props => {
    const { allProducts, setShowProducts } = props;

    const searchFunction = e => {
        const searched = e.target.value.toLowerCase();
        const searchedProducts = allProducts.filter(product => product.name.toLowerCase().includes(searched) || product.category.toLowerCase().includes(searched));

        setShowProducts(searchedProducts);
    }
    return (
        <div id="search-area">
            <input type="text" id="search-field" placeholder="type here for search" onChange={searchFunction} />
        </div>
    );
};

export default Search;