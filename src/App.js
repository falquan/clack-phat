import React, { Component } from 'react';

import WorkoutBlocks from './WorkoutBlocks';
import Sets from './Sets';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clack-Phat</h1>
        </header>
        <p className="App-intro">
          "No great thing is created suddenly." - Epictetus 135 AD
        </p>
        {/* <WorkoutBlocks /> */}
        <Sets />
      </div>
    );
  }
}

export default App;
