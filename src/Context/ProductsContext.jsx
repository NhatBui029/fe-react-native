import React, { createContext } from 'react'
import products from '../assets/all_product'

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider