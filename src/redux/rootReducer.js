import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { dataReducer } from './reducer';
import { profileReducer } from './profileReducer';
import messageReducer from './messageReducer';
import friendReducer from './friendReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    api: dataReducer,
    profile: profileReducer,
    messages: messageReducer,
    friends: friendReducer,
    users: userReducer,
});

export default rootReducer;