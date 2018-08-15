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
    this.getWorkoutGroup();
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
          selectedSheet={this.state.selectedSheet}
          workoutGroups={this.state.workouts} />
      </div>
    );
  }

  getSheetData() {
    let baseSheetUri = 'https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/'
    let apiKey = 'key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0';
    let uri = baseSheetUri + '?' + apiKey;

    fetch(uri)
      .then(response => response.json())
      .catch(error => { alert("Something horrible happened..."); console.error(error) })
      .then(json => this.setState({ sheet: json }));
  }

  blockChange(selectedSheet) {
    this.setState({selectedSheet: selectedSheet});
  }

  getWorkoutGroup()
  {
    let baseSheetUri = 'https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/values/'
    let selectedSheet = this.state.selectedSheet;
    let range = 'A2:P12';
    let apiKey = 'key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0';
    let uri = baseSheetUri + selectedSheet + '!' + range + '?' + apiKey;

    fetch(uri)
      .then(response => response.json())
      .catch(error => console.error("Something horrible happened...", error))
      .then(json => this.setState({ workouts: json }));
  }
}

export default App;
