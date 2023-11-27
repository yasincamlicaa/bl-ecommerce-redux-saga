import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actions/actionTypes';

const initialState = {
  results: [],
  loading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.results,
        error: null,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default searchReducer;
