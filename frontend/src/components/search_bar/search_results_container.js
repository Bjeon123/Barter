import { connect } from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = (state, ownProps) => ({
    posts: Object.values(state.posts)
    // posts: state.posts
});

export default connect(mapStateToProps)(SearchResults);