import { useEffect, useState } from "react";
import axios from 'axios';

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchedText, setSearchedText] = useState(null);

    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const itemsOnPage = 10;

    function getProducts() {
        setProducts([])
        setTotalPage(0)
        if (searchedText) {
            axios.get(`https://ema-john-server.netlify.app/.netlify/functions/server/product-search?name=${searchedText}&&page=${page}&&itemsOnPage=${itemsOnPage}`)
                .then(({ data }) => {
                    setProducts(data.products);
                    setTotalPage(data.totalPage)
                });
        } else {
            axios.get(`https://ema-john-server.netlify.app/.netlify/functions/server/products?page=${page}&itemsOnPage=${itemsOnPage}`)
                .then(({ data }) => {
                    setProducts(data.products);
                    setTotalPage(data.totalPage)
                });
        }
    }
    useEffect(getProducts, [page, searchedText]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => products.length || getProducts(), [])


    function addToCart(product) {
        const newCart = [...cart, product]
        setCart(newCart);

        const productIDs = newCart.map(product => product._id);
        let DB = localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : {};

        productIDs.forEach(id => {
            DB[id] = productIDs.filter(i => i === id).length; // filter how many times one product has been added
        });

        localStorage.setItem('shopping-cart', (JSON.stringify(DB)));
    }

    useEffect(() => getCartItemsFromDB(), [])
    async function getCartItemsFromDB() {
        const dbJSON = localStorage.getItem('shopping-cart');
        if (!dbJSON) { return [] };
        const savedDB = JSON.parse(dbJSON);
        const productIDs = Object.keys(savedDB);
        const result = await axios.post('https://ema-john-server.netlify.app/.netlify/functions/server/multiple-products', productIDs);
        const { data } = result;
        // add products depending on the number of savedDB
        const cartItems = [];
        for (const product of data) {
            // if any product has been added to cart more than once then push that product into cartItems array more than once
            for (let i = 0; i < savedDB[product._id]; i++) {
                cartItems.push(product);
            }
        }
        setCart(cartItems);
    }

    function emptyCart() {
        localStorage.removeItem('shopping-cart');
        setCart([]);
    }

    return {
        page, setPage, totalPage,
        searchedText, setSearchedText,
        products, setProducts,
        cart, setCart, addToCart, getProducts, emptyCart
    }
}