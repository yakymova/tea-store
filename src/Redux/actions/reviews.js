const SET_REVIEWS = 'SET_REVIEWS';

export const setReviews = (reviews) => {
    return {
        type: SET_REVIEWS,
        payload: reviews
    }
}