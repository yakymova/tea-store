let initialState = [];

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REVIEWS':
            return { ...state, reviews: action.payload }
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {
        //         ...state,
        //         newMessageBody: action.body
        //     }
        // case SEND_MESSAGE:
        //     let body = state.newMessageBody;
        //     return {
        //         ...state, messages: [...state.messages, { id: 6, message: body }],
        //         newMessageBody: ''
        //     }
        default:
            return state;
    }
}
export default reviewsReducer;