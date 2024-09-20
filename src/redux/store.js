// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correctly import named 'thunk'
import dataReducer from './reducer';

// Create Redux store
const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;