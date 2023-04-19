let initialState = {
    reviews: [],
    newReview: {}
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REVIEWS':
            return { ...state, reviews: action.payload }
        case 'UPDATE_NEW_MESSAGE_BODY':
            let text = action.payload;
            return {
                ...state,
                newReview: { ...state.newReview, text: text }
            }
        case 'UPDATE_NEW_MESSAGE_NAME':
            let name = action.payload;
            return {
                ...state,
                newReview: { ...state.newReview, name: name }
            }
        case 'SET_DATE':
            let date = action.payload;
            return {
                ...state,
                newReview: { ...state.newReview, date: date }
            }
        case 'SET_RATING':
            let grade = action.payload;
            return {
                ...state,
                newReview: { ...state.newReview, grade: grade }
            }
        case 'SEND_MESSAGE':
            let body = state.newReview;
            return {
                ...state, reviews: [body, ...state.reviews],
                newReview: {}
            }
        default:
            return state;
    }
}
export default reviewsReducer; 