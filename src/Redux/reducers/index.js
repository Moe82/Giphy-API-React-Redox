import axios from 'axios'

//Action Types
import { GOT_SEARCH_RESULTS , GOT_TRENDING_GIFS} from './actionTypes';

const API_KEY = 'pvq2g64V6BqpkDUvs4eLGr9NO1wCc8Dw';

const initialState = {
  searchResults: [],
  trendingGifs: [],
  userHasSearched: false
}

export const getTrendingGifs = (trendingGifs) => {
  return {
    type: GOT_TRENDING_GIFS,
    payload: trendingGifs
  }
}

//Action creaters 
const gotSearchResults = (payload) => ({
  type: GOT_SEARCH_RESULTS,
  payload: payload
})

export const getSearchResults = (searchTerm) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=' + API_KEY + '&limit=25' + '&q=' + searchTerm);
      let searchResults = [] 
      for (let gif of response.data.data){
        searchResults.push(gif.images.downsized.url)
      }
      console.log(response)
      dispatch(gotSearchResults(searchResults))
    } catch (error) {
      console.error(error);
    }
  };
};

// export const getSearchResults = (searchTerm) => {
//   try {
//     let response = await axios.get(
//       'https://api.giphy.com/v1/gifs/search?api_key=' + API_KEY + '&limit=25'
//     );
//     var searchResults = [] 
//     for (let gif of response.data.data){
//       searchResults.push(gif.images.downsized.url)
//     }
//   } catch (error) {
//     console.error(error);
//     }
//   return {
//     type: GOT_SEARCH_RESULTS ,
//     payload: searchResults
//   }
// }



//Root reducer
const rootReducer = (state = initialState, action) => {  
  switch (action.type) {
    case GOT_TRENDING_GIFS:
      return {...state, trendingGifs: action.payload}
    case GOT_SEARCH_RESULTS :
      return {...state, searchResults: action.payload, userHasSearched: true} 
    default:
      return state
  }
}

export default rootReducer;







