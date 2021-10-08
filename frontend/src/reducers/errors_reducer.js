import { combineReducers } from 'redux';
import OfferErrorsReducer from './offer_errors_reducer';
import PostErrorsReducer from './post_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import ItemsErrorsReducer from './items_errors_reducer'

export default combineReducers({
    session: SessionErrorsReducer,
    posts: PostErrorsReducer,
    items: ItemsErrorsReducer,
    offers: OfferErrorsReducer
})

