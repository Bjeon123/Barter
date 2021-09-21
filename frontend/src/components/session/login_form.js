import React from "react";
import { withRouter } from 'react-router-dom';
import '../../styles/login_signup.css'
import '../../styles/nav_bar.css'
import '../../styles/profile.css'
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.currentUser === true) {
            this.props.history.push('/home')
        }
        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        let user = { 
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(user)
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="background">
                <div className="login-form">
                    <form onSubmit={this.handleSubmit}>
                            <h1>Welcome back!</h1>
                            <p>Email</p>
                            <input 
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                            />
                            <p>Password</p>
                            <input 
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                            <button>Login</button>
                            <button>Demo User</button>
                            <p>Need an account? <Link to='/signup'>Register</Link></p>
                            {this.renderErrors()}
                    </form>
                </div>
                <div className="side">
                        <h1>Barter</h1>
                </div>
            </div>
            
        )
    }
}

export default withRouter(LoginForm)