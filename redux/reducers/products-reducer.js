import React from 'react';

const ProductsReducer = (products=[], action) => {
    //logic
    switch (action.type) {
        case 'GET':
            //return new state
            return products;
        default:
            //must return default state
            return products;
    }
}

export default ProductsReducer;