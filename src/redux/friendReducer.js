import {
    SEND_FRIEND_REQUEST,
    ACCEPT_FRIEND_REQUEST,
    REJECT_FRIEND_REQUEST,
    FETCH_FRIEND_REQUESTS,
} from './friendActions';

const initialState = {
    friendRequests: [],
};

const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIEND_REQUESTS:
            return {
                ...state,
                friendRequests: action.payload,
            };
        case SEND_FRIEND_REQUEST:
            return {
                ...state,
                friendRequests: [...state.friendRequests, action.payload],
            };
        case 'ACCEPT_FRIEND_REQUEST':
            return {
                ...state,
                friendRequests: state.friendRequests.map((request) =>
                    request.id === action.payload.id ? action.payload : request
                ),
            };
        case 'REJECT_FRIEND_REQUEST':
            return {
                ...state,
                friendRequests: state.friendRequests.filter((request) => request.id !== action.payload),
            };
        default:
            return state;
    }
};

export default friendReducer;