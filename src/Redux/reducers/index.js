import axios from 'axios';

//Action Types
import { GOT_USER_SEARCH_QUERY , GOT_SEARCH_RESULTS} from './actionTypes';

const initialState = {
  userSearchQuery: ""
}

//Action creaters 
export const gotSearchTerm = (searchTerm) => {
  return {
    type: GOT_USER_SEARCH_QUERY,
    payload: searchTerm
  }
}

const rootReducer = (state = initialState, action) => {  
  switch (action.type) {
    case GOT_USER_SEARCH_QUERY:
      return {...state, userSearchQuery: action.payload} 
    case GOT_SEARCH_RESULTS:
      return ""
    default:
      return state
  }
};

export default rootReducer;