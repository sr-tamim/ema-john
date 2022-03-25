import React, { createContext } from 'react';
import useProducts from '../hooks/useProducts';

export const ProductsContext = createContext();
const ProductsContextProvider = ({ children }) => {
    const allContext = useProducts();
    return (
        <ProductsContext.Provider value={allContext}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;