import React from 'react';
import PostIndexContainer from '../post/post_index_container';
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
        // <PostIndexContainer {...props} />
        // <div>
        //     {posts[0].map((post, idx) => (
        //         <div>
        //             <div className="block"> 
        //                 <h3>Item: </h3><p key={idx}>{post.itemName}</p>
        //             </div>
        //             <div className="block"> 
        //                 <h3>Category: </h3><p key={idx}>{post.category}</p>
        //             </div>
        //             <div className="block"> 
        //                 <h3>Price: </h3><p key={idx}>${post.price}</p>
        //             </div>
        //             <div className="block"> 
        //                 <h3>Description: </h3><p key={idx}>{post.description}</p>
        //             </div>
        //         </div>
        //     ))}
        // </div>
        <PostIndex posts={posts[0]} action="search"/>
    );
}

const mapStateToProps = (state, ownProps) => ({
    posts: Object.values(state.posts)
});

export default connect(mapStateToProps)(SearchResults);