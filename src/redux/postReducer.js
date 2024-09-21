// postReducer.js

import { FETCH_POSTS_SUCCESS, HIDE_POST_SUCCESS, HIDE_POST_FAILURE } from './postActions';
const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null,
            };
        case HIDE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload ? { ...post, isHidden: true } : post
                ),
            };
        case HIDE_POST_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;