import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActionTypes } from './types';

const API_CLIENT = process.env.API_CLIENT
const API_KEY = process.env.API_KEY;

export const getPostAnswers = (postID) => (dispatch) => {
  try {
    axios.get(`${API_CLIENT}/posts/${postID}/answers?key=${API_KEY}`)
      .then((res) => {
        const response = res.data;
        dispatch({
          type: ActionTypes.GET_POST_ANSWERS,
          payload: response,
        });
      });
  } catch (error) {
    dispatch(error(`Get Post Answers Failed: ${error.response.data}`));
  }
};

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

export const getAnswer = (AnswerId, tab) => (dispatch) => {
  try {
    axios.get(`${API_CLIENT}/answers/${AnswerId}?key=${API_KEY}`)
      .then((res) => {
        const response = res.data;
        dispatch({
            type: ActionTypes.GET_ANSWER,
            payload: response,
        });
      });
  } catch (error) {
    dispatch(error(`Get Answer Failed: ${error.response.data}`));
  }
};

export const createAnswer = (params, navigation) => async (dispatch) => {
  try {
    const userInfo = await AsyncStorage.getItem('userInfo');
    const { token, id } = JSON.parse(userInfo); // parse userInfo
    // eslint-disable-next-line no-param-reassign
    params.author = id; // need to reassign param for efficiency's sake so only pull from async storage once
    axios.Answer(`${API_CLIENT}/answers?key=${API_KEY}`, params, { headers: { authorization: token } })
      .then((AnswerResponse) => {
        const newAnswer = AnswerResponse.data;
        // navigation.navigate('Answer Detail', { Answer: newAnswer, tab: "profile", AnswerID: newAnswer._id });
        console.log(newAnswer);
      });
  } catch (error) {
    dispatch(error(`Create Answer Failed: ${error.response.data}`));
  }
};