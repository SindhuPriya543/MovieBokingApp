import {
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAILURE,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE,
} from './messageActions';

const initialState = {
    messages: [],
    error: null,
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: [...state.messages, action.payload], // Add new message to the list
                error: null,
            };
        case POST_MESSAGE_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.payload,
                error: null,
            };
        case FETCH_MESSAGES_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default messageReducer;