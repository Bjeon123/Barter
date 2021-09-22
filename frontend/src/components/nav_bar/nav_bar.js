import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar';

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            openedCategories: false
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            openedCategories: !this.state.openedCategories
        })
    }

    render() {
        const navRight = this.props.session.isAuthenticated ?
            <div className="navbar-right">
                <Link to={"/sell"}><button>Sell</button></Link>
                <Link to={'/home'}><button onClick={this.props.logout}>Sign out</button></Link>
                <Link to ={'/profile'}><i className="fas fa-user"></i></Link>
            </div> :
            <div className="navbar-right">
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/signup'}><button>Sign Up</button></Link>
            </div>
        
        const categories = 
            <div className="categories">
                <div className="category">
                    <p>Games</p>
                </div>
                <div>
                    <p>Shoes</p>
                </div>
            </div>

        return (
           
                <nav className="navbar">
                    <div className="navbar-left">
                        <Link style={{ textDecoration: 'none' }} to={'/home'}><h1>Barter</h1></Link>
                        {/* <p onClick={this.handleClick}>Categories<i className="fas fa-chevron-down"></i></p>
                        {this.state.openedCategories ? categories : null }
                        <input placeholder="search"></input> */}
                        <SearchBar searchPosts={this.props.searchPosts}/>
                    </div>
                    {navRight}
                </nav>
            
        )
    }
}

export default NavBar;