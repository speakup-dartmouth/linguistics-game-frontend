import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActionTypes } from './types';

const API_CLIENT = process.env.API_CLIENT
const API_KEY = process.env.API_KEY;

export const getUserAnswers = (userId) => (dispatch) => {
  try {
    axios.get(`${API_CLIENT}/answers/?key=${API_KEY}&user=${userId}`)
      .then((res) => {
        const response = res.data;
        dispatch({
          type: ActionTypes.GET_USER_ANSWERS,
          payload: response,
        });
      });
  } catch (error) {
    dispatch(error(`Get User Answers Failed: ${error.response.data}`));
  }
};

export const getUser = (userId, person) => (dispatch) => {
  try {
    axios.get(`${API_CLIENT}/users/${userId}?key=${API_KEY}`)
      .then((res) => {
        const response = res.data;
        if (person === 'self') {
          dispatch({
            type: ActionTypes.GET_SELF,
            payload: response,
          });
        } else {
          dispatch({
            type: ActionTypes.GET_OTHER,
            payload: response,
          });
        }
      });
  } catch (error) {
    dispatch(error(`Get User Failed: ${error.response.data}`));
  }
};

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function error(error) {
  return {
    type: ActionTypes.ERROR,
    message: error,
  };
}

export function signinUser({ email, password }, navigate) {
  return (dispatch) => {
    try {
      axios.post(`${API_CLIENT}/signin`, { email, password })
        .then((res) => {
          const response = res.data;
          dispatch({
            type: ActionTypes.AUTH_USER,
          });
          localStorage.setItem('token', response.token);
          navigate('/');
        });
    } catch (error) {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    }
  };
}

export function signupUser({ email, password, username }, navigate) {
  return (dispatch) => {
    try {
      axios.post(`${API_CLIENT}/signup`, { email, password, username })
        .then((res) => {
          const response = res.data;
          dispatch({
            type: ActionTypes.AUTH_USER,
          });
          localStorage.setItem('token', response.token);
          navigate('/');
        });
    } catch (error) {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    }
  };
}

// deletes token from localstorage and deauths
export function signoutUser(navigate) {
  return (dispatch) => {
    AsyncStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    // navigate('/');
  };
}