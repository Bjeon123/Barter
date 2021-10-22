import React from 'react';
import { withRouter } from 'react-router-dom';
import {searchPosts} from '../../util/post_api_util';
import {Link} from 'react-router-dom'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchContent: "",
            matchedPosts: [],
            opened: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleWindowClick = this.handleWindowClick.bind(this);
    }

    handleWindowClick(e){
        e.stopPropagation();
        this.setState({opened: false})
    }

    handleChange(e){
        if(e.target.value === ""){
            this.setState({matchedPosts:[],searchContent:""})
        }
        else{
            this.setState({searchContent: e.target.value},
                ()=>{
                    searchPosts(this.state.searchContent).then(
                        posts => 
                            this.setState({matchedPosts: posts.data, opened: true})
                    )
                }
            )
        }
    }
  
    async handleSubmit(e){
        e.preventDefault();
        await this.props.receiveSearchedPosts(this.state.matchedPosts)
        this.props.history.replace({pathname: this.props.history.location.pathname, pathname: '/searchedPosts'})
    }

    render(){
        let matchedPosts=[];
        if(this.state.matchedPosts.length){
            window.addEventListener("click", this.handleWindowClick)
            for(let i=0;i < this.state.matchedPosts.length;i++){
                if(i===10){
                    break;
                }
                const post = this.state.matchedPosts[i]
                matchedPosts.push(
                    <Link key={`${i}`} to={`/posts/${post._id}`}>
                        <li className="partial-match">
                            {post.itemName}
                        </li>
                    </Link>
                )
            }
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="searchform">
                    <div className="searchbar">
                        <input id="searchbar" type="text" autoComplete="off" name="search" placeholder="Search" onChange={this.handleChange} value={this.state.searchContent}/>
                        <i onClick={this.handleSubmit} className="fas fa-search"></i>
                    </div>
                </form>
                {this.state.matchedPosts.length && this.state.opened ? 
                    <ul className="show-partial-matches">
                        {matchedPosts}
                    </ul> : 
                null }
            </div>
        )
    }

  
  }
  
  export default withRouter(SearchBar);