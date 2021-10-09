import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { createPost,clearPostErrors } from '../../actions/post_actions'
import SellPage from './sell';

const mSTP = state => {
    return {
        session: state.session,
        errors: state.errors.posts
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        createPost: post => dispatch(createPost(post)),
        clearPostErrors: ()=> dispatch(clearPostErrors())
    }
}

export default connect(mSTP, mDTP)(SellPage)
