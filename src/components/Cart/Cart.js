import React from 'react';
import './Cart.css';

const Cart = props => {
    const { cart } = props;
    const subTotal = cart.length > 0 ? cart.reduce((previous, current) => previous + current.price, 0) : 0;
    const shipping = cart.length > 0 ? cart.reduce((previous, current) => previous + current.shipping, 0) : 0;
    const totalBeforeTax = (subTotal + shipping);
    const tax = totalBeforeTax * 0.1;
    const grandTotal = (totalBeforeTax + tax);
    return (
        <div id="cart">
            <div>
                <h3>Cart</h3>
                <div id="cart-info">
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
                </div>
            </div>
        </div>
    );
};

export default Cart;