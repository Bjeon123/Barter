import React from 'react';
import NavBar from '../nav_bar/nav_bar_container'

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            items: [],
            text: "",
            modal: false 
        }
        this.handleOfferSubmit = this.handleOfferSubmit.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.postid;
        this.props.fetchPost(id)
    }

    handleCreateOffer(bool) {
        return e => {
            e.preventDefault()
            this.setState({ modal: bool })
        }
    }

    handleOfferSubmit(e){
        e.preventDefault();
        const offer = {
            user: this.props.currentUser.id,
            text: this.state.text,
            receiver: this.post.userId,
            price: this.state.price,
            items: this.state.items,
            postId: this.props.post.id
        }
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
                            <div className="corner">Product Details</div>
                            <div className="row-container">
                                <div className="post-row">
                                <h3>Category:</h3><p>{this.props.post.data.category}</p>
                                </div>
                                <div className="post-row">
                                    <h3>Name:</h3><p>{this.props.post.data.itemName}</p>
                                </div>
                                <div className="post-row">
                                    <h3>Price:</h3><p>${this.props.post.data.price}</p>
                                </div>
                                <div className="post-row">
                                    <h3>Description:</h3><p>{this.props.post.data.description}</p>
                                </div>
                                <button onClick={this.handleCreateOffer(true)}>Make an Offer</button>
                            </div>
                        </div>
                </div>
                <div className={`modal-container ${this.state.modal ? 'display_modal' : 'hide_modal'}`}>
                    <div className="createOffer">
                        <div className="close" onClick={this.handleCreateOffer(false)}>
                            &times;
                        </div>
                        <form onSubmit={this.handleOfferSubmit}>
                            <h1>Make An Offer</h1>
                            <input
                                type="text"
                                
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostShow;