import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriend } from '../actions/actionCreators';

class GetFriends extends Component {
    state = {
        friends:[]
    }


    fetchFriend = (event) => {
        event.preventDefault();
     this.props.fetchFriend();
     this.setState({friends:this.props.requestPending})

    }


  render() {
      console.log(this.state.friends);
    return (
      <div>
        <button onClick={this.fetchFriend}>Get Friends</button>

        {this.state.friends && this.state.friends.map(friend => {
            return <p>{friend.name}</p>
        })}
  {

      this.props.loading ? <p>Loading Friends</p> : ''
  }
      </div>
    );
  }
}

function mapStateToProps(reducers) {
    console.log('state from the store ', reducers)
  return {
    requestPending: reducers.requestPending.friends,
    errorMessage: reducers.errorMessage,
    loading: reducers.requestPending.fetchingFriends
  };
}

export default connect(
  mapStateToProps,
  { fetchFriend }
)(GetFriends);
