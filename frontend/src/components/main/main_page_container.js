import { connect } from 'react-redux';
import MainPage from './main_page';
import { logout } from '../../actions/session_actions';

const mSTP = state => {
    return {
        currentUser: state.currentUser
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(MainPage)