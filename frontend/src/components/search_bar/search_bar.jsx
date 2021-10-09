import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function SearchBar(props){
    const [searchContent, setSearchContent] = useState('');
  
    function handleChange(e){
        setSearchContent(e.target.value);
    }
  
    function handleSubmit(e){
        e.preventDefault();
        if (searchContent.length > 0){
            props.searchPosts(searchContent);
            setSearchContent('');
            props.history.push(`/results`);
        }
    }

    function handleAutoFillClick(post){
        // setSearchContent(' ');
        return () => props.fetchPost(post._id)
            .then(() => props.history.push(`/posts/${post._id}`));
    }

    let matchedItemNames = [];
    let posts = props.allPosts;
    if(posts != undefined && posts.length != 0 && Array.isArray(posts[0])){
        matchedItemNames = posts[0].filter(post => (
            (post.itemName.toLowerCase().slice(0, searchContent.length) === searchContent.toLowerCase())
        )).slice(0, 15).map((post, idx) => (
            <li className="partial-match" key={idx} onClick={handleAutoFillClick(post)}>
                {post.itemName}
            </li>
        ));
    }
    
    if(searchContent === "") matchedItemNames = null;
    let ulShow = (searchContent != "" && matchedItemNames.length > 0) ? "show-partial-matches" : "hide-partial-matches";
  
    return (
        <div>
            <form onSubmit={handleSubmit} className="searchform">
                <div className="searchbar">
                    <input type="text" name="search" placeholder="Search" onChange={handleChange} value={searchContent}/>
                    {/* <button><img id="search-icon" src="https://i.ibb.co/B45HM6R/search-icon.png" alt="Search" /></button> */}
                    <input id="search-icon" type="image" src="https://i.ibb.co/B45HM6R/search-icon.png" alt="Submit" />
                </div>
            </form>
            <ul className={ulShow}>
                {matchedItemNames}
            </ul>
        </div>
        
    );
  
  }
  
  export default withRouter(SearchBar);