const SET_REVIEWS = 'SET_REVIEWS';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const UPDATE_NEW_MESSAGE_NAME = 'UPDATE_NEW_MESSAGE_NAME';
const SET_DATE = 'SET_DATE';
const SET_RATING = 'SET_RATING';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const setReviews = (reviews) => {
    return {
        type: SET_REVIEWS,
        payload: reviews
    }
}

export const updateMessageBody = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        payload: text
    }
}

export const updateMessageName = (name) => {
    return {
        type: UPDATE_NEW_MESSAGE_NAME,
        payload: name
    }
}

export const setDate = (date) => {
    return {
        type: SET_DATE,
        payload: date
    }
}

export const setRating = (rating) => {
    return {
        type: SET_RATING,
        payload: rating
    }
}

export const sendMessage = () => {
    return {
        type: SEND_MESSAGE,
    }
}