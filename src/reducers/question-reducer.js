/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
import { ActionTypes } from '../actions/types';

const initialState = {
  currentHome: null,
  currentDiscovery: null,
  currentCollections: null,
  currentProfile: null,
  all: [],
  collections: [],
  recommended: [],
  hot: [],
  searched: [],
  pp: [],
  pp_other: [],
  shouldGet: true,
};

const PostReducer = (state = initialState, action = {}) => {
  const res = {};
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return {
        ...state, current: action.payload[0], all: action.payload, shouldGet: false,
      };
    case ActionTypes.GET_POST_HOME:
      return { ...state, currentHome: action.payload };
    case ActionTypes.GET_POST_DISCOVERY:
      return { ...state, currentDiscovery: action.payload };
    case ActionTypes.GET_POST_COLLECTIONS:
      return { ...state, currentCollections: action.payload };
    case ActionTypes.GET_POST_PROFILE:
      return { ...state, currentProfile: action.payload };
    case ActionTypes.GET_RECOMMENDED_POSTS:
      for (const tagGroup of action.payload) {
        res[tagGroup.tag] = tagGroup.posts;
      }
      return { ...state, recommended: res };
    case ActionTypes.GET_HOT_POSTS:
      return { ...state, hot: action.payload };
    case ActionTypes.GET_SEARCH_POSTS:
      for (const post of action.payload) {
        for (const tag of post?.tags || []) {
          if (!res.hasOwnProperty(tag)) res[tag] = [];
          res[tag].push(post);
        }
      }
      return { ...state, searched: res };
    case ActionTypes.NEW_POST:
      return { ...state, current: action.payload };
    case ActionTypes.GET_COLLECTIONS:
      return { ...state, collections: action.payload };
    case ActionTypes.GET_PP:
      return { ...state, pp: action.payload };
    case ActionTypes.GET_PP_OTHER:
      return { ...state, pp_other: action.payload };
    case ActionTypes.SHOULD_GET:
      return { ...state, shouldGet: action.payload };
    default:
      return state;
  }
};

export default PostReducer;