import Profile from './profile'
import {connect} from 'react-redux'
import {fetchUserPosts} from '../../actions/post_actions'

const mSTP = state =>(
    {
        posts: state.posts,
        user: state.session.user
    }
)

const mDTP = dispatch =>(
    {
        fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)) 
    }
)

export default connect(mSTP,mDTP)(Profile)

