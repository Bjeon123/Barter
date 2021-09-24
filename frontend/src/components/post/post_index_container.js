import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions';
import React from 'react';
// import posts from '../../../validation/posts';

class PostIndexContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = { posts: null }
    }
    componentDidMount(){
        this.props.fetchPosts().then(posts => this.setState({ posts: posts }))
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
const mapStateToProps = state => ({
    session: state.session,
    // posts: state.posts,
    posts: Object.values(state.posts)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    updatePost: postId => dispatch(updatePost(postId)),
    deletePost: postId =>  dispatch(deletePost(postId)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexContainer);