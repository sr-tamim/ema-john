import { useEffect, useState } from "react";
import axios from 'axios';

export default function useProducts() {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const itemsOnPage = 10;

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchedText, setSearchedText] = useState(null);
    function getProducts() {
        if (searchedText) {
            axios.get(`https://ema-john-srt.herokuapp.com/products/search?name=${searchedText}&&page=${page}&&itemsOnPage=${itemsOnPage}`)
                .then(({ data }) => {
                    setProducts(data.products);
                    setTotalPage(data.totalPage)
                });
        } else {
            axios.get(`https://ema-john-srt.herokuapp.com/?page=${page}&&itemsOnPage=${itemsOnPage}`)
                .then(({ data }) => {
                    setProducts(data.products);
                    setTotalPage(data.totalPage)
                });
        }
    }
    useEffect(getProducts, [page, searchedText]);


    useEffect(() => getCartItemsOnLoad());
    async function getCartItemsOnLoad() {
        const cartItems = await getFromDB();
        setCart(cartItems);
    }


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

    async function getFromDB() {
        const dbJSON = localStorage.getItem('shopping-cart');
        if (!dbJSON) { return [] };
        const savedDB = JSON.parse(dbJSON);
        const productIDs = Object.keys(savedDB);
        const result = await axios.post('https://ema-john-srt.herokuapp.com/products/byID', productIDs);
        const { data } = result;
        // add products depending on the number of savedDB
        const cartItems = [];
        for (const product of data) {
            // if any product has been added to cart more than once then push that product into cartItems array more than once
            for (let i = 0; i < savedDB[product._id]; i++) {
                cartItems.push(product);
            }
        }
        return cartItems;
    }

    function emptyCart() {
        localStorage.removeItem('shopping-cart');
        setCart([]);
    }

    return {
        page, setPage, totalPage,
        setSearchedText,
        products, setProducts,
        cart, setCart, addToCart, getProducts, emptyCart
    }
}