import React, { Component } from 'react'
import axios from 'axios'
import { gotTrendingGifs } from '../Redux/reducers'
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
      this.props.gotTrendingGifs(trendingGifs)
    } catch (error) {
      console.error(error);
      }
  }
  render() {

    return (

      <div>
        {this.props.trendingGifs.map(gif => {
          return (
          <div>
            <img src={gif} />
            <br/>
          </div>
          
          )
        })
      }
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    trendingGifs: state.trendingGifs,
    userSearchQuery: state.userSearchQuery
  }
}

const mapDispatchToProps = (dispatch) => ({
  gotTrendingGifs: (trendingGifs) => dispatch(gotTrendingGifs(trendingGifs)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GifDisplay)
