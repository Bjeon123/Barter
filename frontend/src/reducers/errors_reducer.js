import { combineReducers } from 'redux';
import PostErrorsReducer from './post_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    posts: PostErrorsReducer
})

