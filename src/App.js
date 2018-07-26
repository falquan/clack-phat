import React, { Component } from 'react';

import SheetList from './SheetList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { sheets: { } }

  componentWillMount()
  {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/?key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0')
      .then(response => response.json())
      .then(json => this.setState({ sheets: json }))
      .catch(error => console.error("Something horrible happened...", error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SheetList sheets={this.state.sheets} />
      </div>
    );
  }
}

export default App;
