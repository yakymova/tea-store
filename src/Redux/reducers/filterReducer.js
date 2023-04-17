const initialState = {
    searchQuery: '',
    filterBy: 'all',
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload,
            };
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;