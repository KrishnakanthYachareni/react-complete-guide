import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I am a React App</h1>
        <p>This is working properly</p>
        <Person/>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am in createElement'))
  }
}

export default App;
