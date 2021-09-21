import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'
import {numToDollars} from '../../util/number_api_util'

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
        console.log(this.state)
        for (let i = 0; i < posts.length; i++){
            postslis.push(
                <div className="profile-post-item">
                    <h3>{(posts[i].itemName).replace(/^"(.*)"$/, '$1')}</h3>
                    <h3>{numToDollars.format(posts[i].price)}</h3>
                    <h3>{(posts[i].description).replace(/^"(.*)"$/, '$1')}</h3>
                </div>
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
                    <a>Change Username</a>
                    <a>Change Password</a>
                    <button className="profile-settings-btn">Delete Account</button>
                </div>
            </div>
        )
    }
}

export default Profile