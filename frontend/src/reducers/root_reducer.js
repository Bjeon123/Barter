import { combineReducers } from 'redux';
import session from './session_api_reducer';
import posts from './posts_reducer'
import offers from './offers_reducer'
import errors from './errors_reducer'

const RootReducer = combineReducers({
  session,
  posts,
  offers,
  errors,
});

export default RootReducer;