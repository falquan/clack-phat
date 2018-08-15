import React, { Component } from 'react';

import Workout from './Workout';

import './WorkoutGroup.css';

class WorkoutGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="WorkoutGroup-workouts">
        <h3>{this.props.selectedSheet}</h3>
        <Workout workouts={this.props.workoutGroups.values} />
      </div>
    );
  }
}

export default WorkoutGroup;