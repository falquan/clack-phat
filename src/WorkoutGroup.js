import React, { Component } from 'react';

import Workout from './Workout';

import './WorkoutGroup.css';

class WorkoutGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.selectedSheet);
    return (
      <div className="WorkoutGroup-workouts">
        <Workout workouts={this.props.workoutGroups.values} />
      </div>
    );
  }
}

export default WorkoutGroup;