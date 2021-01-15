import React from 'react'
import { connect } from 'react-redux'
import { getSearchResults } from '../Redux/reducers'

class UserInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userSearchQuery: "",
      rating: "g",
      language:"en"
    }
  }
  
    
  handleSubmit = (event) => {
    console.log(this.state.rating)
    event.preventDefault()
    this.props.getSearchResults(this.state.userSearchQuery, this.state.rating, this.state.language)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit} class="user-input">
        <label >
            <br />
            Search: <input name="userSearchQuery" type="text" value={this.state.userSearchQuery} onChange={this.handleChange} />
        </label>  <br />
        Rating: <select name='rating' value={this.state.rating} onChange={this.handleChange}>
          <option value="g">g</option>
          <option value="pg">pg</option>
          <option value='pg-13'>pg-13</option>
          <option value="r">r</option>
        </select> <br />
        Language: <select name='language' value={this.state.language} onChange={this.handleChange}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="ru">Russian</option>
          <option value="hi">Hindi</option>
          <option value="th">Thai</option>
          <option value="pt">Portuguese</option>
        </select> <br /> <br />
        <input class="button" type="submit" value="Submit" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userSearchQuery: state.userSearchQuery
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: (searchTerm, rating, language) => dispatch(getSearchResults(searchTerm, rating, language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)

