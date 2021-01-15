import React from 'react'
import { connect } from 'react-redux'
import { gotSearchTerm } from '../Redux/reducers'

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
    this.props.gotSearchTerm(this.state.userSearchQuery)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            <br />
            Search: <input type="text" value={this.state.userSearchQuery} onChange={this.handleChange} />
        </label>
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
  gotSearchTerm: (searchTerm) => dispatch(gotSearchTerm(searchTerm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)