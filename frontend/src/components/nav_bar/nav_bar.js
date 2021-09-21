import React from "react";
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const navRight = this.props.session.user ?
            <div className="navbar-right">
                <Link><button onClick={this.props.logout}>Sign out</button></Link>
                <Link><i class="fas fa-user"></i></Link>
            </div> :
            <div className="navbar-right">
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/signup'}><button>Sign Up</button></Link>
            </div>
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar-left">
                        <h1>Barter</h1>
                        <input placeholder="search"></input>
                    </div>
                    {navRight}
                </nav>
            </div>
        )
    }
}

export default NavBar;