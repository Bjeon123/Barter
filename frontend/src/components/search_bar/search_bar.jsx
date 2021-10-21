import React from 'react';
import { withRouter } from 'react-router-dom';
import {searchPosts} from '../../util/post_api_util';
import PostIndex from '../post/post_index';
import {Link} from 'react-router-dom'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchContent: "",
            matchedPosts: [],
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({searchContent: e.target.value},
            ()=>{
                searchPosts(this.state.searchContent).then(
                    posts => 
                        this.setState({matchedPosts: posts.data})
                )
            }
        )
    }
  
    async handleSubmit(e){
        e.preventDefault();
        await this.props.receiveSearchedPosts(this.state.matchedPosts)
        this.props.history.replace({pathname: this.props.history.location.pathname, pathname: '/searchedPosts'})
    }

    render(){
        let matchedPosts=[];
        console.log(this.state)
        for(let i=0;i < this.state.matchedPosts.length;i++){
            if(i===10){
                break;
            }
            const post = this.state.matchedPosts[i]
            matchedPosts.push(
                <Link to ={`/posts/${post._id}`}>
                    <li className="partial-match">
                        {post.itemName}
                    </li>
                </Link>
            )
        }
        if(this.state.redirect){
            return <PostIndex posts={this.state.matchedPosts} action="search"/>
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="searchform">
                    <div className="searchbar">
                        <input type="text" name="search" placeholder="Search" onChange={this.handleChange} value={this.state.searchContent}/>
                        <input id="search-icon" type="image" src="https://i.ibb.co/B45HM6R/search-icon.png" alt="Submit" autoComplete="off" />
                    </div>
                </form>
                {this.state.matchedPosts.length ? 
                    <ul className="show-partial-matches">
                        {matchedPosts}
                    </ul> : 
                null }
            </div>
        )
    }

  
  }
  
  export default withRouter(SearchBar);