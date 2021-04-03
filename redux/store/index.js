import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProductsReducer from '../reducers/products-reducer'

const rootReducer = combineReducers({
    ProductsReducer
});


const store = createStore(rootReducer);

export { store }