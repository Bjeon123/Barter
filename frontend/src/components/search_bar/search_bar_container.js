import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchPosts, fetchPosts } from '../../actions/post_actions';

const mapStateToProps = state =>({
  // posts: state.posts
  posts: Object.values(state.posts)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  searchPosts: searchContent => dispatch(searchPosts(searchContent))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);