import PostShow from './post_show';
import { connect } from 'react-redux';
import { fetchPost, updatePost, deletePost } from '../../actions/post_actions';
import { signup, login, logout } from '../../actions/session_actions';
import { createOffer,fetchPostOffers,updateOffer} from '../../actions/offer_actions';
import {createItem,updateItem} from '../../actions/item_actions';
//need to import fetchOffer from offer_actions

const mapStateToProps = (state, ownProps) => ({
    post: state.posts,
    postId: ownProps.match.params.postId,
    offers: state.offers,
    currentUser: state.session.user,
    errors: { ...state.errors.items,...state.errors.offers}
});

const mapDispatchToProps = dispatch => ({
    signup: () => dispatch(signup()),
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    updatePost: postId => dispatch(updatePost(postId)),
    deletePost: postId => dispatch(deletePost(postId)),
    createOffer: offer => dispatch(createOffer(offer)),
    fetchPostOffers: postId => dispatch(fetchPostOffers(postId)),
    createItem: item => dispatch(createItem(item)),
    updateOffer: offer => dispatch(updateOffer(offer)),
    updateItem: (itemId,item) => dispatch(updateItem(itemId,item))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)