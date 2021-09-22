import React from 'react';
// import PostShow from './post_show';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const allPosts = Object.values(this.props.posts).map((post, idx) => {(
            // <div>
            //     <PostShow post={ post } updatePost={this.props.updatePost} deletePost={this.props.deletePost} key={ idx }/>
            // </div>
            <ul>
                <li>{ post.userId }</li>
                <li>{ post.category }</li>
                <li>{ post.itemName }</li>
                <li>{ post.price }</li>
                <li>{ post.description }</li>
            </ul>
        )});

        return(
            <div>{ allPosts }</div>
        )
    }
}

export default PostIndex;