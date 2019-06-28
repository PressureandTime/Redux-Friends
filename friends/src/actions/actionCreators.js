import axios from 'axios';

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
} from './actionTypes';

export function fetchFriend() {
  return dispatch => {
    dispatch({ type: FETCHING_FRIEND });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { Authorization: token } } : null;

    axios
      .get('http://localhost:5000/api/friends', axiosConfig)
      .then(res => {
        dispatch({ type: FETCHING_FRIEND_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: FETCHING_FRIEND_FAILURE, payload: error });
        console.error(error);
      });
  };
}

export function updateFriend() {
  return dispatch => {
    dispatch({ type: UPDATING_FRIEND });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { Authorization: token } } : null;

    axios
      .put('http://localhost:5000/api/friends', axiosConfig)
      .then(res => {
        dispatch({ type: UPDATING_FRIEND_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: UPDATING_FRIEND_FAILURE, payload: error });
        console.error(error);
      });
  };
}

export function deleteFriend(id) {
  return dispatch => {
    dispatch({ type: DELETING_FRIEND });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { Authorization: token } } : null;

    axios
      .delete(`http://localhost:5000/api/friends/${id}`, axiosConfig)
      .then(res => {
        dispatch({ type: DELETING_FRIEND_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: DELETING_FRIEND_FAILURE, payload: error });
        console.error(error);
      });
  };
}

export function saveFriend(name) {
  return dispatch => {
    dispatch({ type: SAVING_FRIEND });
    const newFriend = { name };
    const token = localStorage.getItem('token');
    const axiosConfig = token
      ? { headers: { Authorization: token }, data: { newFriend } }
      : null;

    axios
      .post('http://localhost:5000/api/friends', axiosConfig)
      .then(res => {
        dispatch({ type: SAVING_FRIEND_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: SAVING_FRIEND_FAILURE, payload: error });
        console.error(error);
      });
  };
}

export function login(credentials) {
  return dispatch => {
    dispatch({ type: LOGGING_IN });

    return axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: LOGIN_FAILURE, payload: error });
        console.error(error);
      });
  };
}

