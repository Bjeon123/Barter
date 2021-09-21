import React from 'react';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId)
    }

    handleOfferSubmit(e){
        
    }

    render() {
        if (!this.props.post) {
            return (
                <div>Loading..</div>
            )
        }
        return (
            <div>
                <div className="post-pic-container">
                    {this.props.post.photoUrls.map((photoUrl, idx) => (
                        <img className="post-pic" key={idx} src={ photoUrl } alt="post-picture"/>
                    ))}
                </div>
                        
                <div className="post-info">
                    <p>{this.props.post.category}</p>
                    <p>{this.props.post.itemName}</p>
                    <p>{this.props.post.price}</p>
                    <p>{this.props.post.description}</p>
                </div>
                <button onClick={() => this.handleOfferSubmit}>Make an Offer</button>
            </div>
        )
    }
}

export default PostShow;