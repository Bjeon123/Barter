import React from 'react';
import NavBar from '../nav_bar/nav_bar_container'
import OfferItem from './offer_item'
import {createItem,fetchOfferItems} from '../../util/item_api_util'
import { Image } from 'cloudinary-react'

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offerId: null,
            price: 0,
            items: [],
            itemsToRender : [],
            offersData : [],
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
                (offers) => {
                    for (let i = 0; i < offers.offers.data.length;i++){
                        const offerData = offers.offers.data[i];
                        let offerItemsData={};
                        offerItemsData.cash = offerData.price;
                        offerItemsData.offer_description = offerData.text;
                        offerItemsData.offerId = offerData._id
                        fetchOfferItems(offerItemsData.offerId).then(
                            (items)=>{
                                const itemsData = items.data;
                                let addItemsData = {};
                                for(let j = 0; j<itemsData.length ; j++){
                                    addItemsData[j] = itemsData[j]
                                }
                                offerItemsData['items'] = addItemsData
                            }
                        ).then(
                            () => this.setState({ offersData: [...this.state.offersData, offerItemsData] })
                        )
                    }   
                }
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
        this.setState({ modal: false })
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
                    const item = this.state.items[i];
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
        let offersDataRender =[]
        for(let i=0;i<this.state.offersData.length;i++){
            const offer = this.state.offersData[i];
            let itemsdiv=[];
            for(let j=0;j<Object.keys(offer.items).length;j++){
                let item = offer.items[j]
                const itemRender=
                <div className="dimensions">
                    <div className="item-details">
                        <h4>Item: {item.name}</h4>
                        {/* <p>{item.description}</p> */}
                    </div>
                    <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${item.imageUrl}`} />
                </div>
                itemsdiv.push(itemRender)
            }
            let offerDiv =
                <div className="offer-post">
                    {/* <p>User: {offer.user}</p> */}
                    <h4>Description: {offer.offer_description}</h4>
                    <h4>Cash offered: ${offer.cash}</h4>
                    {itemsdiv}
                    <div className="decision">
                        <button className="accept">Accept</button>
                        <button className="decline">Decline</button>
                    </div>
                </div>
            offersDataRender.push(offerDiv)
        }
        console.log(this.state)
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
                                {offersDataRender}
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
                            <div className="cash-offer">
                                <label> Offer Description
                                    <input onChange={this.handleChange('text')} type="text" />
                                </label>
                                <label> Cash Offer
                                    <input onChange={this.handleChange('price')} type="number" placeholder="$0" />
                                </label>
                            <p onClick={this.addItem}><i class="fas fa-plus"></i> Add An Item</p>
                            {this.state.itemsToRender}
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