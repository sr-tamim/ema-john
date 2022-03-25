import { useEffect, useState } from "react";
import axios from 'axios';
import { addToDB, getFromDB } from "../utilities/fakedb";

export default function useProducts() {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const itemsOnPage = 10;

    const [products, setProducts] = useState([]);
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



    const [cart, setCart] = useState([]);
    useEffect(() => getCartItemsOnLoad(), []);
    async function getCartItemsOnLoad() {
        const cartItems = await getFromDB();
        setCart(cartItems);
    }

    const addToCart = (product) => addToDB(product, cart, setCart);

    return {
        page, setPage, totalPage,
        setSearchedText,
        products, setProducts,
        cart, setCart, addToCart, getProducts
    }
}