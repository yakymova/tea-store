const initialState = {
    searchQuery: '',
    filterBy: 'all',
    sortBy: ''
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
        case 'SET_SORT':
            return {
                ...state,
                sortBy: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;