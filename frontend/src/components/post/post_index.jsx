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
            return null;
        }
        console.log("Page");
        const allPosts = this.state.posts.map((post, idx) => {(
            <ul>
                <li key={idx}>{ post.userId }</li>
                <li key={idx}>{ post.category }</li>
                <li key={idx}>{ post.itemName }</li>
                <li key={idx}>{ post.price }</li>
                <li key={idx}>{ post.description }</li>
            </ul>
        )});

        return(
            <div>{ allPosts }</div>
        )
    }
}

export default PostIndex;