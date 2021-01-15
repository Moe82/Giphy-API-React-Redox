import './App.css';
import React from 'react';

// components 
import UserInput from './Components/UserInput'
import GifDisplay from './Components/GifDisplay'

 export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <GifDisplay />
      </div>
    );
  }
}
