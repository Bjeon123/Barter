import { connect } from 'react-redux';
import SearchResults from './search_results';

const mSTP = state =>({
    searchedPosts: state.searchedPosts
})

export default connect(mSTP,null)(SearchResults)