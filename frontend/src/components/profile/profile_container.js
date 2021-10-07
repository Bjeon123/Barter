import Profile from './profile'
import {connect} from 'react-redux'
import {fetchUserPosts} from '../../actions/post_actions'
import {fetchUserOffers} from '../../actions/offer_actions'
import {fetchTransactions} from '../../actions/transaction_actions'
import { logout} from '../../actions/session_actions'
import { editUser,deleteUser} from '../../actions/user_actions'
import { faDiceSix } from '@fortawesome/free-solid-svg-icons'

const mSTP = state =>(
    {
        posts: state.posts,
        offers: state.offers,
        user: state.session.user,
        session: state.session,
        transactions: state.transactions
    }
)

const mDTP = dispatch =>(
    {
        fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
        fetchUserOffers: (userId) => dispatch(fetchUserOffers(userId)),
        logout: () => dispatch(logout()),
        editUser: user => dispatch(editUser(user)),
        deleteUser: (userId)=> dispatch(deleteUser(userId)),
        fetchTransactions: userId => dispatch(fetchTransactions(userId))
    }
)

export default connect(mSTP,mDTP)(Profile)

