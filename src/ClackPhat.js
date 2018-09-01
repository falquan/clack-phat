import React, { Component } from 'react';

import DayNavigation from './DayNavigation.js';
import BlockGroup from './BlockGroup';
import WorkoutGroup from './WorkoutGroup';

import './ClackPhat.css';

class ClackPhat extends Component {
  constructor(props) {
    super(props);
    
    this.blockChange = this.blockChange.bind(this);
  }

  state = {
    block: { blocks: [] },
    selectedBlock: "",
    hierarchicalWorkout: [ { superSets: [] } ]
  }

  componentDidMount()
  {
    this.getSheetData();
    this.getWorkoutGroup(this.state.selectedBlock);
  }

  render() {
    return (
      <div className="ClackPhat">
        <header className="ClackPhat-header">
          <h1 className="ClackPhat-title">Clack-Phat</h1>
        </header>
        <DayNavigation 
          hierarchicalWorkout={this.state.hierarchicalWorkout} />
        <WorkoutGroup
          selectedBlock={this.state.selectedBlock}
          hierarchicalWorkout={this.state.hierarchicalWorkout} />
        <BlockGroup
          blocks={this.state.block.blocks}
          onBlockChange={this.blockChange} />
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
      .then(json => this.setState({ block: { blocks: json.sheets } }));
  }

  blockChange(selectedBlock) {
    this.getWorkoutGroup(selectedBlock);
  }

  scrubData(json) {
    let allExercises = [];
    for (let i = 0; i < json.values.length; i++) {
      let day = json.values[i][0];
      let superSets = json.values[i].slice(1);
      let superSet = [];

      for (let j = 0; j < superSets.length; j++) {
        let exercise = superSets[j].split('\n');

        if (exercise[0] === '') {
          // skip it, placeholder
        } else if (isNaN(exercise[0])) {
          // is "bonus" or "inspirational"
          superSet.push({
            number: "",
            isBonus: exercise[0].toLowerCase().startsWith('bonus'),
            set: exercise});
        } else {
          // regular
          superSet.push({
            number: exercise[0],
            isBonus: false,
            set: exercise.slice(1)});
        }
      }

      allExercises.push({ 
        day: day,
        displayName: day,
        order: i,
        isKbWeek: day.startsWith('kb'),
        superSets: superSet});
    }

    return allExercises;
  }

  getWorkoutGroup(sheetName)
  {
    let baseSheetUri = 'https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/values/'
    let selectedSheet = sheetName;
    let range = 'A2:P12';
    let apiKey = 'key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0';
    let uri = baseSheetUri + encodeURIComponent(selectedSheet) + '!' + range + '?' + apiKey;

    fetch(uri)
      .then(response => response.json())
      .catch(error => console.error("Something horrible happened...", error))
      .then(json => {
        var allExercises = this.scrubData(json);

        this.setState({ selectedBlock: json.range.split("!")[0] });
        this.setState({ hierarchicalWorkout: allExercises })
      });
  }
}

export default ClackPhat;
