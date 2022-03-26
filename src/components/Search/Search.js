
import React, { useContext, useRef } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import './Search.css';


const Search = () => {
    const { setSearchedText, setPage } = useContext(ProductsContext);
    const searchRef = useRef();
    const searchFunction = e => {
        e.preventDefault();
        const searchText = searchRef.current.value.toLowerCase();
        setPage(0);
        setSearchedText(searchText);
    }
    return (
        <section id="search-area">
            <form onSubmit={searchFunction}>
                <input type="text" id="search-field" placeholder="type here for search" ref={searchRef} />
                <input type="submit" id="search-submit" value="Search" />
            </form>
        </section>
    );
};


export default Search;