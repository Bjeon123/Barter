import React from "react";
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        const navRight = this.props.session.isAuthenticated ?
            <div className="navbar-right">
                <Link to={'/home'}><button onClick={this.props.logout}>Sign out</button></Link>
                <Link><i class="fas fa-user"></i></Link>
            </div> :
            <div className="navbar-right">
                <button>Buy</button>
                <button>Sell</button>
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/signup'}><button>Sign Up</button></Link>
            </div>
        return (
           
                <nav className="navbar">
                    <div className="navbar-left">
                        <h1>Barter</h1>
                        <input placeholder="search"></input>
                    </div>
                    {navRight}
                </nav>
            
        )
    }
}

export default NavBar;