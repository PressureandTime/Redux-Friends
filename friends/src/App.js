import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RestrictedRoute from './HOCs/RestrictedRoute';
import LoginView from './views/LoginView';
import Friends from './components/Friends';
import GetFriends from './components/GetFriends';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GetFriends/>
       

        {/* {this.props.errorMessage && (
          <h2 style={{ color: 'red' }}>{this.props.errorMessage}</h2>
        )}
        {this.props.requestPending && <h2>Loading...</h2>} */}
        <RestrictedRoute exact path="/" component={Friends} />
        <Route exact path="/login" component={LoginView} />
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    requestPending: reducers.requestPending,
    errorMessage: reducers.errorMessage
  };
}

export default connect(mapStateToProps)(App);
