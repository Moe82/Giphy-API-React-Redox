//Action Types
import { GOT_USER_SEARCH_QUERY , GOT_TRENDING_GIFS} from './actionTypes';

const initialState = {
  userSearchQuery: "",
  trendingGifs: []
}

//Action creaters 
export const gotSearchTerm = (searchTerm) => {
  return {
    type: GOT_USER_SEARCH_QUERY,
    payload: searchTerm
  }
}

export const gotTrendingGifs = (trendingGifs) => {
  return {
    type: GOT_TRENDING_GIFS,
    payload: trendingGifs
  }
}

//Root reducer
const rootReducer = (state = initialState, action) => {  
  switch (action.type) {
    case GOT_TRENDING_GIFS:
      return {...state, trendingGifs: action.payload}
    case GOT_USER_SEARCH_QUERY:
      return {...state, userSearchQuery: action.payload} 
    default:
      return state
  }
}

export default rootReducer;







