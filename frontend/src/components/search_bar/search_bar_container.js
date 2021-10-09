import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchPosts, fetchPosts, fetchPost } from '../../actions/post_actions';

const mapStateToProps = state =>({
  // posts: state.posts
  allPosts: Object.values(state.allPosts)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: postId => dispatch(fetchPost(postId)),
  searchPosts: searchContent => dispatch(searchPosts(searchContent))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);