import axios from 'axios';

// Action Types
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

// Fetch Users
export const fetchUsers = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5001/users'); // URL to json-server
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};