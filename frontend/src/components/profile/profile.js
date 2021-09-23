import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'
import {numToDollars} from '../../util/number_api_util'
import {Image} from 'cloudinary-react'
import {Link} from 'react-router-dom'

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userId: this.props.user.id,
            posts: null,
            offers: null
        }
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
                        <h3>{(post.itemName).replace(/^"(.*)"$/, '$1')}</h3>
                        <h3>{numToDollars.format(post.price)}</h3>
                        <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${post.imageUrl}`}/>
                    </div>
                </Link>
            )
        }
        let offerlis = [];
        if(offers.length !== 0){
            for (let i = 0; i < offers.length; i++) {
                offerlis.push(
                    <div className="profile-post-item">
                        <h3>{(offers[i].items)}</h3>
                        <h3>{numToDollars.format(offers[i].price)}</h3>
                        <h3>{(offers[i].text).replace(/^"(.*)"$/, '$1')}</h3>
                    </div>
                )
            }
        }
        return(
            <div>
                <NavBar/>
                <div className="profile">
                    <h1>Profile</h1>
                    <h2>Your Posts</h2>
                    <div className="profile-post-lists">
                        {postslis}
                    </div>
                    <h2>Offers Made</h2>
                    <div className= "profile-post-lists">
                       {offerlis}
                    </div>
                    <div className="user-options">
                        <a>Change Username</a>
                        <a>Change Password</a>
                    </div>
                    <button className="profile-settings-btn">Delete Account</button>
                </div>
            </div>
        )
    }
}

export default Profile