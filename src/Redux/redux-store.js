// import { combineReducers, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer';
import filterReducer from './reducers/filterReducer';
import cartReducer from './reducers/cartReducer';
import reviewsReducer from './reducers/reviewsReducer';

// let reducers = combineReducers({
//     products: productsReducer
// });

// let store = createStore(reducers);

const store = configureStore({
    reducer: {
        products: productsReducer,
        filter: filterReducer,
        cart: cartReducer,
        reviews: reviewsReducer
    }
})
console.log(store.dispatch);
export default store;