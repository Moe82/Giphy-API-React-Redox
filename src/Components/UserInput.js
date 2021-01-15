import React from 'react'
import { connect } from 'react-redux'
import { getSearchResults } from '../Redux/reducers'

class UserInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userSearchQuery: ""
    }
  }
  
  handleChange = (event) => {
      this.setState({userSearchQuery: event.target.value});
  }
    
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getSearchResults(this.state.userSearchQuery)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class="user-input">
        <label >
            <br />
            Search: <input type="text" value={this.state.userSearchQuery} onChange={this.handleChange} />
        </label> 
        <input class="button" type="submit" value="Submit" />
        <br />
        <br />
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
  getSearchResults: (searchTerm) => dispatch(getSearchResults(searchTerm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)