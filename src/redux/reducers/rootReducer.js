import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import postsReducer from "./postsReducer";
import adminReducer from "./adminSlice";

const rootReducer = combineReducers({
  movies: movieReducer,
  user: userReducer,
  profile: profileReducer,
  posts: postsReducer,
  admin: adminReducer,
});

export default rootReducer;
