import { ActionTypes } from '../actions/types';

const initialState = {
  self: null,
  other: null,
  all: [],
};

const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_SELF:
      return { ...state, self: action.payload };
    case ActionTypes.GET_OTHER:
      return { ...state, other: action.payload };
    default:
      return state;
  }
};

export default UserReducer;