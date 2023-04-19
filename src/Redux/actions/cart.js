const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product, amount) => ({
    type: ADD_TO_CART,
    product,
    amount
});

export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    payload: id,
});