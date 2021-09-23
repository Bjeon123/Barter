import { combineReducers } from 'redux';
import session from './session_api_reducer';
// import posts from './posts_reducer'
import offers from './offers_reducer'
import errors from './errors_reducer'
import postsReducer from './posts_reducer';

const RootReducer = combineReducers({
  session,
  posts: postsReducer,
  offers,
  errors,
});

export default RootReducer;