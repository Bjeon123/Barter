import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';
import {Image} from 'cloudinary-react'
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
// import PostShow from './post_show';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: null};
    }

    // componentDidMount(){
    //     this.props.fetchPosts()
    //         .then(posts => this.setState({posts: posts}))
    // }

    // componentDidMount(){
    //     this.props.fetchPosts();
    // }

    render() {
        if(this.props.posts === null) {
            return <p>Null</p>;
        }
        const dir = this.props.action ? this.props.posts : this.props.posts.posts.data;
        return(
            <div className="post-index">
                <NavBar />
                <h1>All Listings</h1>
                <div className="posts-container">
                {
                    // posts.map((post, idx) => (
                    dir.map((post, idx) => (
                        <div className="offer" >
                            <div className="item-description">
                                {/* <div className="block"> 
                                    <h3>Name: </h3><p key={idx}>{post.userId}</p>
                                </div> */}
                                <div className="block"> 
                                    <h3>Item: </h3><p key={idx}>{post.itemName}</p>
                                </div>
                                <div className="block"> 
                                    <h3>Category: </h3><p key={idx}>{post.category}</p>
                                </div>
                                <div className="block"> 
                                    <h3>Price: </h3><p key={idx}>${post.price}</p>
                                </div>
                                <div className="block"> 
                                    <h3>Description: </h3><p key={idx}>{post.description}</p>
                                </div>
                            </div>
                            <div className="picture">
                                <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${post.imageUrl}`} />
                                <button><Link to={`/posts/${post._id}`}>Offer</Link></button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        );
    }
}

export default PostIndex;