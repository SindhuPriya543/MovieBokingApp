import axios from 'axios';

// Action Types
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

// Post a Message (Thunk action)
export const postMessage = (messageData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5001/posts', messageData); // Assuming 'messages' endpoint exists in json-server
        dispatch({
            type: POST_MESSAGE_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: POST_MESSAGE_FAILURE,
            payload: error.message,
        });
    }
};

// Fetch all messages (Thunk action)
export const fetchMessages = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5001/posts'); // Assuming 'messages' endpoint exists
        dispatch({
            type: FETCH_MESSAGES_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_MESSAGES_FAILURE,
            payload: error.message,
        });
    }
};