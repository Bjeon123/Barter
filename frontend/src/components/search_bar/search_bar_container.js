import { connect } from 'react-redux';
import SearchBar from './search_bar';
import {receiveSearchedPosts } from '../../actions/post_actions';


const mapDispatchToProps = dispatch => ({
  receiveSearchedPosts: posts => dispatch(receiveSearchedPosts(posts))
});


export default connect(null, mapDispatchToProps)(SearchBar);