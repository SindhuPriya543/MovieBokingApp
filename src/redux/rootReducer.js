import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { dataReducer } from './reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    api: dataReducer,
});

export default rootReducer;