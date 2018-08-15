import React, { Component } from 'react';

import BlockGroup from './BlockGroup';
import WorkoutGroup from './WorkoutGroup';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.blockChange = this.blockChange.bind(this);
  }

  state = {
    sheet: { sheets: [] },
    selectedSheet: "",
    workouts: { values: [] }
  }

  componentDidMount()
  {
    this.getSheetData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clack-Phat</h1>
        </header>
        <BlockGroup
          blocks={this.state.sheet.sheets}
          onBlockChange={this.blockChange} />
        <WorkoutGroup
          workoutGroups={this.state.workouts}
          selectedSheet={this.state.selectedSheet} />
      </div>
    );
  }

  async getSheetData() {
    await fetch('https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/?key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0')
      .then(response => response.json())
      .then(json => this.setState({ sheet: json }))
      .catch(error => { alert("Something horrible happened..."); console.error(error) });
  }

  blockChange(selectedSheet) {
    this.setState({selectedSheet: selectedSheet});
    this.getWorkoutGroup()
  }

  async getWorkoutGroup()
  {
    let baseSheetUri = 'https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/values/'
    let selectedSheet = this.state.selectedSheet;
    let range = 'A2:P12';
    let apiKey = 'key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0';
    let uri = baseSheetUri + selectedSheet + '!' + range + '?' + apiKey;

    console.log(uri);

    await fetch(uri)
      .then(response => response.json())
      .then(json => this.setState({ workouts: json }))
      .catch(error => console.error("Something horrible happened...", error));
  }
}

export default App;
