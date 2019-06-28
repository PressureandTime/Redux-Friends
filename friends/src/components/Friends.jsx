import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFriend } from '../actions/actionCreators';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="add new friend"
          onChange={this.onChangeHandler}
        />
        <br />
        <button
          onClick={() => this.props.saveFriend(this.state.name)}
          type="submit"
        >
          Add friend
        </button>
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

export default connect(
  mapStateToProps,
  { saveFriend }
)(Friends);
