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