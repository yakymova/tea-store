const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let newItems = [];
            for (let i = 0; i < action.amount; i++) {
                newItems.push(action.product);
            }
            return {
                ...state,
                items: [...state.items, ...newItems]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;