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

    // let matchedItemNames = [];
    // let posts = props.posts;
    // if(posts != undefined){
    //     matchedItemNames = posts.filter(post => (
    //         (post.itemName.toLowerCase().slice(0, searchContent.length) === searchContent.toLowerCase())
    //     )).slice(0, 15).map((post, idx) => (
    //         <li className="matched-itemName" key={idx}>
    //             {post.itemName}
    //         </li>
    //     ));
    // }
    
    
  
    return (
        <form onSubmit={handleSubmit}>
            <div className="searchbar">
                <input type="text" name="search" placeholder="Search Categories" onChange={handleChange} value={searchContent}/>
                {/* <button type="submit" className="search">Submit</button> */}
            </div>
        </form>
    );
  
  }
  
  export default withRouter(SearchBar);