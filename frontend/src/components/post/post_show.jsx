import React from 'react';
import NavBar from '../nav_bar/nav_bar_container'

class PostShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = this.props.match.params.postid;
        this.props.fetchPost(id)
    }

    handleOfferSubmit(e){
        
    }

    render() {
        if (!this.props.post) {
            return null;
        }
        return (
            <div>
                <NavBar/>
                <div className="post-container">
                    {/* <div className="post-pic-container">
                        {this.props.post.data.photoUrls.map((photoUrl, idx) => (
                        <img className="post-pic" key={idx} src={ photoUrl } alt="post-picture"/>
                    ))}
                    </div> */}
                    <div className="post-info">
                        <p>Category: {this.props.post.data.category}</p>
                        <p>Name: {this.props.post.data.itemName}</p>
                        <p>Price: {this.props.post.data.price}</p>
                        <p>Description: {this.props.post.data.description}</p>
                    </div>
                    <button onClick={() => this.handleOfferSubmit}>Make an Offer</button>
                </div>
            </div>
        )
    }
}

export default PostShow;