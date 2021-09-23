import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchPosts } from '../../actions/post_actions';

const mapDispatchToProps = dispatch => ({
  searchPosts: searchContent => dispatch(searchPosts(searchContent))
});


export default connect(null, mapDispatchToProps)(SearchBar);