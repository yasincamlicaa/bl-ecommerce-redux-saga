import {
    CREATE_SESSION_SUCCESS,
    CREATE_SESSION_FAILURE,
  } from '../actions/actionTypes';
  
  const initialState = {
    sessionId: localStorage.getItem('Session-ID') || null,
    error: null,
  };
  
  const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_SESSION_SUCCESS:
        localStorage.setItem('Session-ID', action.payload);
        return {
          ...state,
          sessionId: action.payload,
          error: null,
        };
      case CREATE_SESSION_FAILURE:
        return {
          ...state,
          sessionId: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default sessionReducer;
  