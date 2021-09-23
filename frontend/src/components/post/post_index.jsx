import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';
import {Image} from 'cloudinary-react'
// import PostShow from './post_show';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = { posts: null};
    }

    componentDidMount(){
        this.props.fetchPosts()
            .then(posts => this.setState({posts: posts}))
    }

    render() {
        if(this.state.posts === null) {
            return <p>Null</p>;
        }
        console.log("Page");
        console.log(this.state.posts);
        return(
            <div className="post-index">
                <NavBar />
                <h1>All Listings</h1>
                <div className="posts-container">
                {
                    this.state.posts.posts.data.map((post, idx) => (
                        <div className="offer" >
                            <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${post.imageUrl}`} />
                            <div className="block"> 
                                <h3>Name: </h3><p key={idx}>{post.userId}</p>
                            </div>
                            <div className="block"> 
                                <h3>Category: </h3><p key={idx}>{post.category}</p>
                            </div>
                            <div className="block"> 
                                <h3>Item: </h3><p key={idx}>{post.itemName}</p>
                            </div>
                            <div className="block"> 
                                <h3>Price: </h3><p key={idx}>${post.price}</p>
                            </div>
                            <div className="block"> 
                                <h3>Description: </h3><p key={idx}>{post.description}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        );

        // const allPosts = this.state.posts.posts.data.map((post, idx) => {(
        //     <div>
        //         <p key={idx}>{post.userId}</p>
        //         <p key={idx}>{post.category}</p>
        //         <p key={idx}>{post.itemName}</p>
        //         <p key={idx}>{post.price}</p>
        //         <p key={idx}>{post.description}</p>
        //     </div>
        // )});

        // return(
        //     <div>
        //         <h1>Index Page</h1>
        //         <div>{allPosts}</div>
        //     </div>
        // )
    }
}

export default PostIndex;