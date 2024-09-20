// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correctly import named 'thunk'
import rootReducer from './rootReducer';

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;