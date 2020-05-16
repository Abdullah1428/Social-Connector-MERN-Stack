import {
  GET_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  REPOS_ERROR,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  LOGOUT
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      };
    case REPOS_ERROR:
      return {
        ...state,
        repos: [],
        loading: false,
        error: payload
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    case LOGOUT:
      return {
        ...state,
        error: {},
        loading: false,
        profile: null,
        profiles: [],
        repos: []
      };
    default:
      return state;
  }
}
