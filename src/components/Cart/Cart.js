import React, { useContext } from 'react';
import './Cart.css';
import { ProductsContext } from '../../contexts/ProductsContext';

const Cart = () => {
    const { cart, emptyCart } = useContext(ProductsContext);
    const subTotal = cart.length > 0 ? cart.reduce((previous, current) => previous + parseFloat(current.price), 0) : 0;
    const shipping = cart.length > 0 ? cart.reduce((previous, current) => previous + parseFloat(current.shipping), 0) : 0;
    const totalBeforeTax = (subTotal + shipping);
    const tax = totalBeforeTax * 0.1;
    const grandTotal = (totalBeforeTax + tax);
    return (
        <aside id="cart" className="hide">
            <div id="cart-container">
                <h2>Cart</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Items Added:</td>
                            <td>{cart.length}</td>
                        </tr>
                        <tr>
                            <td>Shipping:</td>
                            <td>${shipping ? shipping.toFixed(2) : 0}</td>
                        </tr>
                        <tr>
                            <td>Total before Tax:</td>
                            <td>${totalBeforeTax ? totalBeforeTax.toFixed(2) : 0}</td>
                        </tr>
                        <tr>
                            <td>Tax:</td>
                            <td>${tax ? tax.toFixed(2) : 0}</td>
                        </tr>
                        <tr id="grand-total">
                            <td>GrandTotal:</td>
                            <td>${grandTotal ? grandTotal.toFixed(2) : 0}</td>
                        </tr>
                    </tbody>
                </table>
                <button id="empty-cart-button" onClick={() => emptyCart()}>Empty Cart</button>
            </div>
        </aside>
    );
};

export default Cart;