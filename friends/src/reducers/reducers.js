import {
  FETCHING_FRIEND,
  FETCHING_FRIEND_SUCCESS,
  FETCHING_FRIEND_FAILURE,
  UPDATING_FRIEND,
  UPDATING_FRIEND_SUCCESS,
  UPDATING_FRIEND_FAILURE,
  DELETING_FRIEND,
  DELETING_FRIEND_SUCCESS,
  DELETING_FRIEND_FAILURE,
  SAVING_FRIEND,
  SAVING_FRIEND_SUCCESS,
  SAVING_FRIEND_FAILURE,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/actionTypes';

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export function friendsReducer(sliceOfState = initialState, action) {
  switch (action.type) {
    case FETCHING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        fetchingFriends: true
      };
    case SAVING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        savingFriends: true
      };
    case UPDATING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        updatingFriends: true
      };
    case DELETING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        deletingFriends: true
      };
    default:
      return sliceOfState;
  }
}

export function errorMessageReducer(sliceOfState = initialState, action) {
  switch (action.type) {
    case FETCHING_FRIEND_FAILURE:
      return {
        ...sliceOfState,
        fetchingFriends: false
      };

    case FETCHING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        fetchingFriends: true
      };

    case SAVING_FRIEND_FAILURE:
      return {
        ...sliceOfState,
        savingFriends: false
      };
    case SAVING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        savingFriends: true
      };

    case DELETING_FRIEND_FAILURE:
      return {
        ...sliceOfState,
        savingFriends: false
      };
    case DELETING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        savingFriends: false
      };

    case LOGIN_FAILURE:
      return {
        ...sliceOfState,
        logginIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...sliceOfState,
        logginIn: true
      };

    case UPDATING_FRIEND_FAILURE:
      return {
        ...sliceOfState,
        updatingFriend: false
      };
    case UPDATING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        updatingFriend: true
      };

    default:
      return sliceOfState;
  }
}

export function requestPendingReducer(sliceOfState = initialState, action) {
  switch (action.type) {
    case FETCHING_FRIEND:
      return {
        ...sliceOfState
      };
    case FETCHING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        fetchingFriends: true
      };
    case FETCHING_FRIEND_FAILURE:
      return {
        ...sliceOfState,
        fetchingFriends: false
      };

    case SAVING_FRIEND:
      return {
        ...sliceOfState
      };

    case SAVING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        savingFriend: true
      };
    case SAVING_FRIEND_FAILURE:
      return {
        ...sliceOfState,
        savingFriend: true
      };

    case DELETING_FRIEND:
      return {
        ...sliceOfState
      };

    case DELETING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        deletingFriend: true
      };

    case DELETING_FRIEND_FAILURE:
      return {
        ...sliceOfState,
        deletingFriend: false
      };

    case UPDATING_FRIEND:
      return {
        ...sliceOfState
      };

    case UPDATING_FRIEND_SUCCESS:
      return {
        ...sliceOfState,
        updatingFriend: true
      };

    case UPDATING_FRIEND_FAILURE:
      return {
        ...sliceOfState,
        updatingFriend: false
      };

    case LOGGING_IN:
      return {
        ...sliceOfState
      };

    case LOGIN_SUCCESS:
      return {
        ...sliceOfState,
        loggingIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...sliceOfState,
        loggingIn: false
      };

    default:
      return sliceOfState;
  }
}
