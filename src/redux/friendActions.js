import axios from 'axios';

// Action Types
export const SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST';
export const ACCEPT_FRIEND_REQUEST = 'ACCEPT_FRIEND_REQUEST';
export const REJECT_FRIEND_REQUEST = 'REJECT_FRIEND_REQUEST';
export const FETCH_FRIEND_REQUESTS = 'FETCH_FRIEND_REQUESTS';

// Send Friend Request
export const sendFriendRequest = (request) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5001/friendRequests', request);
        dispatch({ type: SEND_FRIEND_REQUEST, payload: response.data });
    } catch (error) {
        console.error('Error sending friend request:', error);
    }
};



export const acceptFriendRequest = (requestId) => async (dispatch) => {
    try {
        // Assuming your API updates the friend request and returns the updated request
        const response = await axios.patch(`http://localhost:5001/friendRequests/${requestId}`, {
            status: 'accepted',
        });

        dispatch({
            type: 'ACCEPT_FRIEND_REQUEST',
            payload: response.data,
        });
    } catch (error) {
        console.error('Error accepting friend request:', error);
    }
};

export const rejectFriendRequest = (requestId) => async (dispatch) => {
    try {
        // Assuming your API deletes the friend request
        await axios.delete(`http://localhost:5001/friendRequests/${requestId}`);

        dispatch({
            type: 'REJECT_FRIEND_REQUEST',
            payload: requestId,
        });
    } catch (error) {
        console.error('Error rejecting friend request:', error);
    }
};

// Fetch Friend Requests
export const fetchFriendRequests = (userId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5001/friendRequests?recipientId=${userId}`);
        dispatch({ type: FETCH_FRIEND_REQUESTS, payload: response.data });
    } catch (error) {
        console.error('Error fetching friend requests:', error);
    }
};