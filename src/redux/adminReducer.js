import { FETCH_USERS, BLOCK_USER, UNBLOCK_USER, POST_ADVERTISEMENT } from './adminActions';

const initialState = {
    users: [],
    advertisements: [],
};

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case BLOCK_USER:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload ? { ...user, isBlocked: true } : user
                ),
            };
        case UNBLOCK_USER:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload ? { ...user, isBlocked: false } : user
                ),
            };
        case POST_ADVERTISEMENT:
            return {
                ...state,
                advertisements: [...state.advertisements, action.payload],
            };
        default:
            return state;
    }
};