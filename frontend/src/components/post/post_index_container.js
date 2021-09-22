import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions';

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    updatePost: postId => dispatch(updatePost(postId)),
    deletePost: postId =>  dispatch(deletePost(postId)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);