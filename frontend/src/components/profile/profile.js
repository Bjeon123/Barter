import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'
import {numToDollars} from '../../util/number_api_util'
import {Image} from 'cloudinary-react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { fetchOfferItems } from '../../util/item_api_util'


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userId: this.props.user.id,
            posts: null,
            offersData: [],
            offers: null,
            postdrop: false,
            offerdrop: false,
            username: this.props.user.username,
            account: false 
        }
        this.handlePostDrop = this.handlePostDrop.bind(this);
        this.handleOfferDrop = this.handleOfferDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
        this.handleAccountSettings = this.handleAccountSettings.bind(this);
    }
    
    componentDidMount(){
        const {userId}=this.state
        this.props.fetchUserPosts(userId).then(
            posts =>{
                this.setState({posts: posts.posts.data})
            }
        ).then(
            this.props.fetchUserOffers(userId).then(
                (offers) => {
                    for (let i = 0; i < offers.offers.data.length; i++) {
                        const offerData = offers.offers.data[i];
                        let offerItemsData = {};
                        offerItemsData.cash = offerData.price;
                        offerItemsData.postId= offerData.postId;
                        offerItemsData.offer_description = offerData.text;
                        offerItemsData.offerId = offerData._id
                        fetchOfferItems(offerItemsData.offerId).then(
                            (items) => {
                                const itemsData = items.data;
                                let addItemsData = {};
                                for (let j = 0; j < itemsData.length; j++) {
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

    handleChange(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleAccountSettings() {
        this.setState({ account: !this.state.account })
    }

    handlePostDrop() {
        this.setState({ postdrop: !this.state.postdrop})
    }

    handleOfferDrop() {
        this.setState({ offerdrop: !this.state.offerdrop})
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            id: this.props.user.id, 
            username: this.state.username
        }
        let updatedUser = Object.assign({},this.props.session)
        this.props.editUser(user).then(
            this.props.logout()
        )
    }

    deleteAccount(){
        this.props.deleteUser(this.state.userId).then(
            this.props.logout()
        )
    }

    render(){
        const {posts,offersData} = this.state
        const {user} = this.props.session
        if(posts === null){
            return null
        }
        else if (user === undefined ){
            return null
        }
        let postslis = [];
        for (let i = 0; i < posts.length; i++){
            const post = posts[i];
            postslis.push(
                <Link to={`posts/${posts[i]._id}`}>
                    <div className="offer-container">
                        <div className="offer-details">
                            <h3>{(post.itemName).replace(/^"(.*)"$/, '$1')}</h3>
                            <h3>{numToDollars.format(post.price)}</h3>
                        </div>
                        <div className="image-container">
                            <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${post.imageUrl}`}/>
                        </div>
                    </div>
                </Link>
            )
        }
        let offerlis = [];
        if(offersData.length !== 0){
            for (let i = 0; i < offersData.length; i++) {
                const offer = this.state.offersData[i];
                let itemsdiv = [];
                for(let j=0; j< Object.values(offer.items).length; j++){
                    let item = offer.items[j]
                    const itemRender =
                    <div className="item-render">
                        <h3>Name: </h3><p>{item.name}</p>
                        <h3>Description: </h3><p>{item.description}</p>
                        <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${item.imageUrl}`} />
                    </div>
                    itemsdiv.push(itemRender)
                }
                offerlis.push(
                    <Link to={`posts/${offersData[i].postId}`} className="offer-container">
                        <div className="offer-details">
                            <h3>Offer Id:</h3> <p>{offersData[i].offerId}</p>
                            <h3>Cash offered:</h3> <p>{numToDollars.format(offersData[i].cash)}</p>
                            <h3>Offer description: </h3><p>{(offersData[i].offer_description).replace(/^"(.*)"$/, '$1')}</p>
                        </div>
                        <div className="image-container">
                            {itemsdiv}
                        </div>
                    </Link>
                )
            }
        }
        return(
            <div className="profile-background">
                <NavBar/>
                <div className="profile">
                    <h1>{`${this.props.session.user.username}`}'s Profile</h1>
                    <div className="header">
                        <h2>Your Posts</h2>
                        <i onClick={this.handlePostDrop}><FontAwesomeIcon icon={faAngleDown} className="angle"/></i>
                    </div>
                    <div className={`${this.state.postdrop ? 'display_modal' : 'hide_modal' } items`}>
                        {postslis}
                    </div>
                    <div className="header">
                        <h2>Offers Made</h2>
                        <i onClick={this.handleOfferDrop}><FontAwesomeIcon icon={faAngleDown} className="angle"/></i>
                    </div>
                    <div className={`${this.state.offerdrop ? 'display_modal' : 'hide_modal' } items`}>
                       {offerlis}
                    </div>
                    <div className="user-options">
                        <button className="profile-settings-btn" onClick={this.handleAccountSettings}>User Options</button>
                    </div>
                </div>
                
                <div className={`modal-container ${this.state.account ? 'display_modal' : 'hide_modal'}`}>
                    <form className="user-profile">
                    <div className="close" onClick={this.handleAccountSettings}>
                        &times;
                    </div>
                        <h1>Account Settings</h1>
                        <p>New Username</p>
                        <input onChange={(e) => this.setState({ username: e.target.value })} type="text"></input>
                        
                        <div className="user-options2">
                            <button onClick={this.deleteAccount} className="profile-settings-btn2">Delete Account</button>
                            <button onClick={this.handleSubmit} className="profile-settings-btn2">Change Username</button>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default Profile