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
            props.history.push(`/search/results`);
        }
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Name or Category" onChange={handleChange} value={searchContent}/>
            <button type="submit">Submit</button>
        </form>
    );
  
  }
  
  export default withRouter(SearchBar);