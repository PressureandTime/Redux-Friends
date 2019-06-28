import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actionCreators';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onLogin = event => {
    event.preventDefault();

    const usernameInput = event.target['username'];
    const passwordInput = event.target['password'];
    const credentials = {
      username: usernameInput.value,
      password: passwordInput.value
    };

    usernameInput.value &&
      passwordInput.value &&
      this.props.login(credentials).then(() => {
        this.props.history.push('/');
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onLogin}>
          <input
            name="username"
            name="username"
            placeholder="Username"
            onChange={this.onChangeHandler}
          />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginView);
