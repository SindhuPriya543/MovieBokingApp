const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null, // Load user from localStorage
    token: localStorage.getItem('token') || null, // Load token from localStorage
    isAuthenticated: !!localStorage.getItem('token'), // Check if token exists
    loading: false,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
                loading: false,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};