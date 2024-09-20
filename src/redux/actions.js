// actions.js
import axios from '../axios/axiosConfig';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action creators
const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

// Thunk action for making parallel API calls
export const fetchDataParallel = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const [responseA, responseB] = await Promise.all([
        axios.get('/Film.JSON'),
        axios.get('/Film.JSON')
      ]);
      
      // Dispatch the success action with both responses
      dispatch(fetchDataSuccess({ dataA: responseA.data, dataB: responseB.data }));
    } catch (error) {

      // Capture detailed error information
      const errorDetails = {
        message: error.message || 'An unexpected error occurred',
        url: error.config ? `${error.config.baseURL}${error.config.url}` : 'URL not available', // Complete URL with host and port
        method: error.config?.method, // HTTP method used
        status: error.response?.status, // HTTP status code
        response: error.response?.data // Response body if available
      };
      
      dispatch(fetchDataFailure(errorDetails));
    }
  };
};

export const fetchDataParallel1 = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const [responseA, responseB] = await Promise.all([
        axios.get('/Film.JSON'),
        axios.get('/Film.JSON')
      ]);
      
      // Dispatch the success action with both responses
      dispatch(fetchDataSuccess({ dataA: responseA.data, dataB: responseB.data }));
    } catch (error) {

      // Capture detailed error information
      const errorDetails = {
        message: error.message || 'An unexpected error occurred',
        url: error.config ? `${error.config.baseURL}${error.config.url}` : 'URL not available', // Complete URL with host and port
        method: error.config?.method, // HTTP method used
        status: error.response?.status, // HTTP status code
        response: error.response?.data // Response body if available
      };
      
      dispatch(fetchDataFailure(errorDetails));
    }
  };
};

