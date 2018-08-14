import React, { Component } from 'react';

import BlockGroup from './BlockGroup';
import WorkoutGroup from './WorkoutGroup';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clack-Phat</h1>
        </header>
        {/* <BlockGroup /> */}
        <WorkoutGroup />
      </div>
    );
  }
}

export default App;
