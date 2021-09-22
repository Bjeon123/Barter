import React from 'react';
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
            <div>
                {
                    this.state.posts.posts.data.map((post, idx) => (
                        <div>
                            <p key={idx}>{post.userId}</p>
                            <p key={idx}>{post.category}</p>
                            <p key={idx}>{post.itemName}</p>
                            <p key={idx}>{post.price}</p>
                            <p key={idx}>{post.description}</p>
                        </div>
                    ))
                }
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