import React from 'react';
import PostIndex from '../post/post_index';
import { connect } from 'react-redux';

function SearchResults(props){

    if (props.posts.length === 0){
        return (
            <p>No Matched Posts</p>
        )
    }
    const { posts } = props;
    return(
        <PostIndex posts={posts[0]} action="search"/>
    );
}

const mapStateToProps = (state, ownProps) => ({
    posts: Object.values(state.posts)
});

export default connect(mapStateToProps)(SearchResults);