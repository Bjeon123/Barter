import React from 'react';
import NavBar from '../nav_bar/nav_bar_container'
import OfferItem from './offer_item'
import {createItem} from '../../util/item_api_util'
import { Image } from 'cloudinary-react'

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offerId: null,
            price: 0,
            items: [],
            itemsToRender:[],
            text: "",
            modal: false 
        }
        this.handleOfferSubmit = this.handleOfferSubmit.bind(this);
        // this.removeItem = this.removeItem.bind(this);
        this.addItem=this.addItem.bind(this);
        this.addItemtoState=this.addItemtoState.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.postid;
        this.props.fetchPost(id).then(
            (post) => this.props.fetchPostOffers(post.post.data._id).then(
                (offers) => console.log(offers)
            )
        )
    }

    handleCreateOffer(bool) {
        return e => {
            e.preventDefault()
            this.setState({ modal: bool })
        }
    }

    addItemtoState(item,idx){
        let items = [...this.state.items];
        items[idx] = item;
        this.setState( { items } );
    }

    handleOfferSubmit(e){
        e.preventDefault();
        const offer = {
            user: this.props.currentUser.id,
            text: this.state.text,
            receiver: this.props.post.data.userId,
            price: parseInt(this.state.price),
            postId: this.props.post.data._id
        }
        let offerId;
        this.props.createOffer(offer).then(
            offer => this.setState({offerId: offer.offer.data._id})
        ).then(
            ()=>{
                for (let i = 0; i < this.state.items.length; i++) {
                    const item = this.state.items[0];
                    const itemFormatted = {
                        userId: this.props.currentUser.id,
                        offerId: this.state.offerId,
                        name: item.name,
                        description: item.description,
                        imageUrl: item.imageUrl
                    }
                    createItem(itemFormatted)
                }
            }
        )
        
    }

    addItem(){
        const idx=this.state.itemsToRender.length
        this.setState({ itemsToRender: [...this.state.itemsToRender, <OfferItem idx={idx} addItemtoState={this.addItemtoState}/>]})
    }

    handleChange(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    // removeItem(idx) {
    //     let itemsArr= [...this.state.items].splice(idx,1);
    //     this.setState({
    //         itemsArr: itemsArr
    //     });
    // }

    render() {
        if (!this.props.post){
            return null;
        }
        return (
            <div>
                <NavBar/>
                <div className="post-container">
                    <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${this.props.post.data.imageUrl}`} />
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
                            <p onClick={this.addItem}><i class="fas fa-plus"></i> Add An Item</p>
                            {this.state.itemsToRender}
                            <div className="cash-offer">
                                <label> Offer Description
                                    <input onChange={this.handleChange('text')} type="text" placeholder="$0" />
                                </label>
                                <label> Cash
                                    <input onChange={this.handleChange('price')} type="number" placeholder="$0" />
                                </label>
                            </div>
                            <button>Create Offer</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostShow;