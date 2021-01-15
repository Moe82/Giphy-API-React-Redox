import React, { Component } from 'react'
import axios from 'axios'
import { getTrendingGifs } from '../Redux/reducers'
import { connect } from 'react-redux'

const API_KEY = 'pvq2g64V6BqpkDUvs4eLGr9NO1wCc8Dw';

class GifDisplay extends Component {

  async componentDidMount() {
    try {
      let response = await axios.get(
        'https://api.giphy.com/v1/gifs/trending?api_key=' + API_KEY + '&limit=25&rating=g'
      );
      let trendingGifs = [] 
      for (let gif of response.data.data){
        trendingGifs.push(gif.images.downsized.url)
      }
      this.props.getTrendingGifs(trendingGifs)
    } catch (error) {
      console.error(error);
      }
  }

  
  render() {
    if (this.props.userHasSearched === false ) {
      return (
        <div >
          {this.props.trendingGifs.map(gif => { return (<div> <img src={gif} /> <br/> </div>)})}
        </div>
      )
    } else {
      return (
        <div>
          {this.props.searchResults.map(gif => { return (<div> <img src={gif} /> <br/> </div>)})}
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    trendingGifs: state.trendingGifs,
    userHasSearched: state.userHasSearched,
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTrendingGifs: (trendingGifs) => dispatch(getTrendingGifs(trendingGifs)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GifDisplay)
