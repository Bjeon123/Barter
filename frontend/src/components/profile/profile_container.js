import Profile from './profile'
import {connect} from 'react-redux'
import {fetchUserPosts} from '../../actions/post_actions'
import {fetchUserOffers} from '../../actions/offer_actions'
import { logout} from '../../actions/session_actions'
import { editUser} from '../../actions/user_actions'

const mSTP = state =>(
    {
        posts: state.posts,
        offers: state.offers,
        user: state.session.user,
        session: state.session
    }
)

const mDTP = dispatch =>(
    {
        fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
        fetchUserOffers: (userId) => dispatch(fetchUserOffers(userId)),
        logout: () => dispatch(logout()),
        editUser: user => dispatch(editUser(user))
    }
)

export default connect(mSTP,mDTP)(Profile)

