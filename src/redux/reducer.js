// reducer.js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from './actions';

// Initial State
const initialState = {
  loading: false,
  dataA: null,
  dataB: null,
  error: null
};

// Reducer
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dataA: action.payload.dataA,
        dataB: action.payload.dataB
      };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: JSON.stringify(action.payload, null, 2) };
    default:
      return state;
  }
};

