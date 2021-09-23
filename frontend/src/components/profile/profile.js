import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'
import {numToDollars} from '../../util/number_api_util'
import {Image} from 'cloudinary-react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userId: this.props.user.id,
            username: "",
            posts: null,
            offers: null,
            postdrop: false,
            offerdrop: false,
        }
        this.handlePostDrop = this.handlePostDrop.bind(this);
        this.handleOfferDrop = this.handleOfferDrop.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    
    componentDidMount(){
        const {userId}=this.state
        this.props.fetchUserPosts(userId).then(
            posts =>{
                this.setState({posts: posts.posts.data})
            }
        ).then(
            this.props.fetchUserOffers(userId).then(
                offers=>{
                    this.setState({offers: offers.offers.data})
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

    handleUpdate(e){
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.props.user.password,
            email: this.props.user.email
        }
        this.props.updateUser(user)
    }

    handlePostDrop() {
        this.setState({ postdrop: !this.state.postdrop})
    }

    handleOfferDrop() {
        this.setState({ offerdrop: !this.state.offerdrop})
    }

    changePassword(){

    }

    deleteAccount(){

    }

    render(){
        const {posts,offers} = this.state
        if(posts === null || offers === null){
            return null
        }
        let postslis = [];
        for (let i = 0; i < posts.length; i++){
            const post = posts[i];
            postslis.push(
                <Link to={`posts/${posts[i]._id}`}>
                    <div className="profile-post-item">
                        <div className="details">
                            <h3>{(post.itemName).replace(/^"(.*)"$/, '$1')}</h3>
                            <h3>{numToDollars.format(post.price)}</h3>
                        </div>
                        <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${post.imageUrl}`}/>
                    </div>
                </Link>
            )
        }
        let offerlis = [];
        if(offers.length !== 0){
            for (let i = 0; i < offers.length; i++) {
                offerlis.push(
                    <div >
                        <h3>{(offers[i].items)}</h3>
                        <h3>{numToDollars.format(offers[i].price)}</h3>
                        <h3>{(offers[i].text).replace(/^"(.*)"$/, '$1')}</h3>
                    </div>
                )
            }
        }
        return(
            <div className="profile-background">
                <NavBar/>
                <div className="profile">
                    <h1>{`${this.props.user.username}`}'s Profile</h1>
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
                        <button className="profile-settings-btn">Change Password</button>
                        <button className="profile-settings-btn">Delete Account</button>
                    </div>
                </div>
                <form onSubmit={this.handleUpdate}>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Profile