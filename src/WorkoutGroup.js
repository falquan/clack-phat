import React, { Component } from 'react';

import Workout from './Workout';

import './WorkoutGroup.css';

class WorkoutGroup extends Component {
  state = { workouts: { values: [] } }

  componentDidMount()
  {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/18CjgZsVNKzity6LOafDwSCx3xjBQeUKLVzgDRE4W5cw/values/A2:P12?key=AIzaSyAPrdN8mGO-3guf4lUetqYuyWjwK4273B0')
      .then(response => response.json())
      .then(json => this.setState({ workouts: json }))
      .catch(error => console.error("Something horrible happened...", error));
  }

  render() {
    return (
      <div className="WorkoutGroup-workouts">
        <Workout workouts={this.state.workouts.values} />
      </div>
    );
  }
}

export default WorkoutGroup;