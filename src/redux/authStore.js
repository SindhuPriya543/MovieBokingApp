import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/rootReducer';

const middleware = [thunk];

const authStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;