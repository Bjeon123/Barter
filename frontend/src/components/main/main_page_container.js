import { connect } from 'react-redux';
import MainPage from './main_page';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';

const mSTP = state => {
    return {
        posts: Object.values(state.posts),
        session: state.session
    }
}

const mDTP = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(MainPage)