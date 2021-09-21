import PostShow from './post_show';
import { connect } from 'react-redux';
import { fetchPost, updatePost, deletePost } from '../../actions/post_actions';
import { signup, login, logout } from '../../actions/session_actions';
//need to import fetchOffer from offer_actions

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.match.params.postId],
    currentUser: state.session.user,
});

const mapDispatchToProps = dispatch => ({
    signup: () => dispatch(signup()),
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    updatePost: postId => dispatch(updatePost(postId)),
    deletePost: postId => dispatch(deletePost(postId)),
    //need to dispatch offer here
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)