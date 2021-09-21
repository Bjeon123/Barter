import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'
import {numToDollars} from '../../util/number_api_util'

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userId: this.props.user.id,
            posts: null
        }
    }
    
    componentDidMount(){
        const {userId}=this.state
        this.props.fetchUserPosts(userId).then(
            posts =>{
                this.setState({posts: posts.posts.data})
            }
        )
    }

    render(){
        const {posts} = this.state
        if(posts === null){
            return null
        }
        console.log(this.props)
        let postslis = [];
        for (let i = 0; i < posts.length; i++){
            postslis.push(
                <div className="profile-post-item">
                    <h3>{(posts[i].itemName).replace(/^"(.*)"$/, '$1')}</h3>
                    <h3>{numToDollars.format(posts[i].price)}</h3>
                    <h3>{(posts[i].description).replace(/^"(.*)"$/, '$1')}</h3>
                </div>
            )
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
                    <h2>Your Offers</h2>
                    <button>Account Settings</button>
                </div>
            </div>
        )
    }
}

export default Profile