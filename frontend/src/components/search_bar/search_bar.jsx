import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { category: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(type){
        return e => this.setState({ [type]: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.searchPosts(this.state.category).then(() => this.props.history.push(`/posts?category=${this.state.category}`));
    }

    render(){
        return(
            <div className="search-bar-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="search-bar">
                        <label className="search-tag1">Find by Category
                            <input type="text" placeholder="games, shoes, books..." onChange={this.update('category')}/>
                        </label>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);