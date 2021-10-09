import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { searchPosts, fetchAllPosts } from '../../actions/post_actions';

const mSTP = state => {
    return {
        session: state.session
    }
}

const mDTP = dispatch => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        searchPosts: search => dispatch(searchPosts(search)),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavBar)