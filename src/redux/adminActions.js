import axios from 'axios';

// Action Types
export const FETCH_USERS = 'FETCH_USERS';
export const BLOCK_USER = 'BLOCK_USER';
export const UNBLOCK_USER = 'UNBLOCK_USER';
export const POST_ADVERTISEMENT = 'POST_ADVERTISEMENT';

// Action Creators
export const fetchUsers = () => async (dispatch) => {
    const response = await axios.get('http://localhost:5001/users'); // Adjust API endpoint
    dispatch({
        type: FETCH_USERS,
        payload: response.data,
    });
};

export const blockUser = (userId) => async (dispatch) => {
    const response = await axios.patch(`http://localhost:5001/users/${userId}`, { isBlocked: true });
    dispatch({
        type: BLOCK_USER,
        payload: response.data,
    });
};

export const unblockUser = (userId) => async (dispatch) => {
    const response = await axios.patch(`http://localhost:5001/users/${userId}`, { isBlocked: false });
    dispatch({
        type: UNBLOCK_USER,
        payload: response.data,
    });
};

export const postAdvertisement = (content) => async (dispatch) => {
    await axios.post('http://localhost:5001/advertisements', { content });
    dispatch({
        type: POST_ADVERTISEMENT,
    });
};

export const updateUser = (userData) => async (dispatch) => {
    try {
        await axios.put(`http://localhost:5001/users/${userData.id}`, userData);
        dispatch(fetchUsers()); // Fetch updated user list
    } catch (error) {
        console.error('Failed to update user:', error);
    }
};

export const fetchUser = (userId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5001/users/${userId}`);
        // Handle the response if needed
    } catch (error) {
        console.error('Failed to fetch user:', error);
    }
};