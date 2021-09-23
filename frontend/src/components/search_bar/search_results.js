import React from 'react';
import PostIndexContainer from '../post/post_index_container'

function SearchResults(props){
    console.log(props.posts);
    if (props.posts.length === 0){
        return (
            <p>No Matched Posts</p>
        )
    }
    return(
        <PostIndexContainer {...props} />
    );
}

export default SearchResults;