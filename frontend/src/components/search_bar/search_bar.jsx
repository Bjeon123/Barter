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