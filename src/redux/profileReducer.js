import { GET_PROFILE, UPDATE_PROFILE, PROFILE_ERROR } from './profileActions';

const initialState = {
    profile: null,
    loading: true,
    error: null,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false,
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};