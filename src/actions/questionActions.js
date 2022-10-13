import axios from 'axios';
import { ActionTypes } from './types';

const API_CLIENT = process.env.API_CLIENT
const API_KEY = process.env.API_KEY;

export const getQuestions = () => (dispatch) => {
  try {
    axios.get(`${API_CLIENT}/questions/?key=${API_KEY}`)
      .then((res) => {
        const response = res.data;
        dispatch({
          type: ActionTypes.GET_QUESTIONS,
          payload: response,
        });
      });
  } catch (error) {
    dispatch(error(`Get Questions Failed: ${error.response.data}`));
  }
};

export const getQuestion = (questionID, tab) => (dispatch) => {
  try {
    axios.get(`${API_CLIENT}/questions/${questionID}?key=${API_KEY}`)
      .then((res) => {
        const response = res.data;
        dispatch({
            type: ActionTypes.GET_QUESTION,
            payload: response,
        });
      });
  } catch (error) {
    dispatch(error(`Get Question Failed: ${error.response.data}`));
  }
};
