import { Component } from 'react';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';

// components 
import Input from './Components/UserInput'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearchQuery: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Input searchTerm={this.state.searchTerm}/>
        {/* {this.props.userSearchQuery} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userSearchQuery: state.userSearchQuery
  }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);