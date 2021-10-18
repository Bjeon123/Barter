import { connect } from 'react-redux';
import { fetchCategoryPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import React from 'react';

class PostCategoriesContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = { posts: null }
    }
    componentDidMount(){
        this.props.fetchCategoryPosts(this.props.category).then(posts => this.setState({ posts: posts }))
    }

    render(){
        if(this.state.posts === null){
            return null;
        }

        return(
            <PostIndex posts={this.state.posts}></PostIndex>
        )
    }
}

const mSTP = (state, ownProps) => ({
    posts: state.posts,
    category: ownProps.match.params.category
})

const mDTP = dispatch => ({
    fetchCategoryPosts: category => dispatch(fetchCategoryPosts(category))
})


export default connect(mSTP, mDTP)(PostCategoriesContainer)