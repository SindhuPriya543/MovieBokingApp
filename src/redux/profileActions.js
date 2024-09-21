import axios from 'axios';
// Action Types
export const GET_PROFILE = 'GET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const PROFILE_ERROR = 'PROFILE_ERROR';

// Get user profile
export const getUserProfile = (userId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5001/users/${userId}`);
        dispatch({
            type: GET_PROFILE,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: error.message,
        });
    }
};

// Update user profile
export const updateUserProfile = (userId, formData) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:5001/users/${userId}`, formData);
        dispatch({
            type: UPDATE_PROFILE,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: error.message,
        });
    }
};