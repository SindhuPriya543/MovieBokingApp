// postActions.js
import axios from 'axios';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const HIDE_POST_SUCCESS = 'HIDE_POST_SUCCESS';
export const HIDE_POST_FAILURE = 'HIDE_POST_FAILURE';



export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5001/posts');
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

export const hidePost = (postId) => async (dispatch) => {
    try {
        await axios.patch(`http://localhost:5001/posts/${postId}`, { isHidden: true });
        dispatch({ type: HIDE_POST_SUCCESS, payload: postId });
    } catch (error) {
        dispatch({ type: HIDE_POST_FAILURE, payload: error.message });
    }
};