import axios from 'axios';

// Action Types
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Action Types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action Creators
export const loginSuccess = (user, token) => ({
    type: LOGIN_SUCCESS,
    payload: { user, token },
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

// Register User (Thunk action)
export const registerUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5001/users', userData); // URL to json-server
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAILURE,
            payload: error.message
        });
    }
};

// Thunk for logging in
export const loginUser = ({ email, password }) => async (dispatch) => {
    console.log(email);
    console.log(password);
    try {
        const response = await axios.get(`http://localhost:5001/users?email=${email}&password=${password}`);
        const user = response.data[0];
        console.log(user);
        if (user) {
            if (user.isBlocked) {
                // Dispatch failure if the user account is blocked
                dispatch(loginFailure('Your account is blocked. Please contact admin.'));
                return; // Stop further processing
            }
            // Simulate generating a token
            const fakeToken = 'fake-jwt-token';

            // Store token in localStorage
            localStorage.setItem('token', fakeToken);
            localStorage.setItem('user', JSON.stringify(user));

            // Dispatch login success
            dispatch(loginSuccess(user, fakeToken));
        } else {
            dispatch(loginFailure('Invalid credentials. Please try again.'));
        }
    } catch (error) {
        dispatch(loginFailure('An error occurred during login'));
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token'); // Clear token from localStorage
    localStorage.removeItem('user');  // Clear user from localStorage
    dispatch({ type: 'LOGOUT' });
};