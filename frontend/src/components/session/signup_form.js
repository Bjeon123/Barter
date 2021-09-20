import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="background">
          <div className="signup-form">
               <form onSubmit={this.handleSubmit}>
                    <p>Email</p>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        placeholder="Email"
                    />
                    <p>Username</p>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        placeholder="username"
                    />
                    <p>Password</p>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Password"
                    />
                    <p>Confirm Password</p>
                    <input type="password"
                        value={this.state.password2}
                        onChange={this.update('password2')}
                        placeholder="Confirm Password"
                    />
                    <button>Register</button>
                    {this.renderErrors()}
            </form>
          </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);