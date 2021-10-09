import React from 'react';
import PostIndexContainer from '../post/post_index_container';
import PostIndex from '../post/post_index';
import { connect } from 'react-redux';
// import NavBar from '../nav_bar/nav_bar';
import NavBar from '../nav_bar/nav_bar_container';

function SearchResults(props){

    if (props.posts.length === 0){
        return (
            <p>No Matched Posts</p>
        )
    }
    const { posts } = props;
    console.log(posts);
    return(
        <PostIndex posts={posts[0]} action="search"/>
    );
}

const mapStateToProps = (state, ownProps) => ({
    posts: Object.values(state.posts)
});

export default connect(mapStateToProps)(SearchResults);