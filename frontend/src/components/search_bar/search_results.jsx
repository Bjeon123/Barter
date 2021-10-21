import React from "react";
import PostIndex from '../post/post_index';


const SearchResults =(props)=>{
    return(
        <PostIndex posts={props.searchedPosts} action="search"/>
    )
}

export default SearchResults